import React, { useEffect, useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonLoading,
  IonButton,
} from '@ionic/react';

import './FeedPage.css';

interface PhotoItem {
  title: string;
  description: string;
  index: number;
}

const FeedPage: React.FC = () => {
  const [items, setItems] = useState<PhotoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFeedFailed, setIsFeedFailed] = useState<boolean>(false);

  const generateRandomIndex = () => Math.floor(Math.random() * 1000);

  const fetchPhotoDetails = async (count: number) => {
    const photos = [];
    for (let i = 0; i < count; i++) {
      const index = generateRandomIndex();
      const response = await fetch(`https://picsum.photos/id/${index}/info`);
      const data = await response.json();
      photos.push({
        title: `Photo by ${data.author}`,
        description: data.download_url,
        index,
      });
    }
    return photos;
  };

  const loadInitialItems = async () => {
    setIsLoading(true);
    setIsFeedFailed(false); // Reset feed failure state

    const timeout = setTimeout(() => {
      setIsFeedFailed(true); // Mark the feed as failed
      setIsLoading(false); // Stop the spinner
    }, 5000);

    try {
      const photoItems = await fetchPhotoDetails(10);
      clearTimeout(timeout); // Clear the timeout if data is successfully loaded
      setItems(photoItems);
    } catch (error) {
      console.error("Failed to load feed", error);
      setIsFeedFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInitialItems();
  }, []);

  const loadMoreItems = async (event: CustomEvent<void>) => {
    const morePhotos = await fetchPhotoDetails(10);
    setItems((prevItems) => [...prevItems, ...morePhotos]);
    (event.target as HTMLIonInfiniteScrollElement).complete();
  };

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    setIsLoading(true);
    setIsFeedFailed(false); // Reset feed failure state

    const timeout = setTimeout(() => {
      setIsFeedFailed(true); // Mark the feed as failed
      setIsLoading(false); // Stop the spinner
    }, 5000);

    try {
      const photoItems = await fetchPhotoDetails(10);
      clearTimeout(timeout); // Clear the timeout if data is successfully loaded
      setItems(photoItems);
    } catch (error) {
      console.error("Failed to load feed", error);
      setIsFeedFailed(true);
    } finally {          
      setIsLoading(false);
      event.detail.complete();
    }
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {isFeedFailed && !isLoading && (
          <div style={{ textAlign: 'center', marginTop: '10rem', padding: '2rem' }}>
            <h1 style={{ color: 'grey' }}>Failed to load feed. Please refresh and try again.</h1>
            <IonButton onClick={loadInitialItems} color="primary">
              Refresh
            </IonButton>
          </div>
        )}

        <IonRefresher
          slot="fixed"
          pullFactor={0.5}
          pullMin={100}
          pullMax={200}
          onIonRefresh={handleRefresh}
        >
          <IonRefresherContent />
        </IonRefresher>

        <IonLoading
          isOpen={isLoading}
          message="Loading feed entries... Please standby"
          spinner="circles"
        />

        {!isLoading && !isFeedFailed && (
          <IonList>
            {items.map((item) => (
              <IonCard key={item.index}>
                <img
                  src={`https://picsum.photos/600/200?random=${item.index}`}
                  alt="Random"
                />
                <IonCardHeader>
                  <IonCardTitle>{item.title}</IonCardTitle>
                  <IonCardSubtitle>Random Image {item.index}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Description: {item.description}
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        )}

        <IonInfiniteScroll onIonInfinite={loadMoreItems} disabled={isFeedFailed}>
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          />
        </IonInfiniteScroll>
      </IonContent>

    </>
  );
};

export default FeedPage;
