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
} from '@ionic/react';

import './FeedPage.css';

interface PhotoItem {
  title: string;
  description: string;
  index: number;
}

const FeedPage: React.FC = () => {
  const [items, setItems] = useState<PhotoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);  // New state to track loading

  const generateRandomIndex = () => Math.floor(Math.random() * 1000);

  const fetchPhotoDetails = async (count: number) => {
    const photos = [];
    for (let i = 0; i < count; i++) {
      const index = generateRandomIndex();
      const response = await fetch(`https://picsum.photos/id/${index}/info`);
      const data = await response.json();
      photos.push({
        title: `Photo by ${data.author}`,
        description: data.download_url, // Using the URL as a placeholder description
        index,
      });
    }
    return photos;
  };

  const loadInitialItems = async () => {
    setIsLoading(true); // Set loading state to true
    const photoItems = await fetchPhotoDetails(10);
    setItems(photoItems);
    setIsLoading(false); // Set loading state to false once data is loaded
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
    const newPhotos = await fetchPhotoDetails(10);
    setItems(newPhotos);
    event.detail.complete();
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
        <IonRefresher
          slot="fixed"
          pullFactor={0.5}
          pullMin={100}
          pullMax={200}
          onIonRefresh={handleRefresh}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {/* Display loading message if items are being fetched */}
        {isLoading ? (
          <h1 className='ion-text-center' style={{ marginTop: '50%' }}>Loading feed entries... <br></br> Please standby</h1>
        ) : (
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

        <IonInfiniteScroll onIonInfinite={loadMoreItems}>
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </>
  );
};

export default FeedPage;