import React, { useEffect, useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
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

interface FeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const FeedPage: React.FC = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFeedFailed, setIsFeedFailed] = useState<boolean>(false);

  // Fetch and parse RSS feed using RSS to JSON API
  const fetchRSSFeed = async () => {
    setIsLoading(true);
    setIsFeedFailed(false);

    try {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://www.philstar.com/rss/headlines`
      );
      const data = await response.json();
      const items = data.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        description: item.description,
        pubDate: item.pubDate,
      }));
      setItems(items);
    } catch (error) {
      console.error('Failed to load feed:', error);
      setIsFeedFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRSSFeed();
  }, []);

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await fetchRSSFeed();
    event.detail.complete();
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Headlines</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        {isFeedFailed && !isLoading && (
          <div style={{ textAlign: 'center', marginTop: '50%', padding: '2rem' }}>
            <h1 style={{ color: 'grey' }}>
              Failed to load feed.<br />Please refresh and try again.
            </h1>
            <IonButton onClick={fetchRSSFeed} color="primary">
              Refresh
            </IonButton>
          </div>
        )}

        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        <IonLoading isOpen={isLoading} message="Loading feed entries..." spinner="circles" />

        {!isLoading && !isFeedFailed && (
          <IonList>
            {items.map((item, index) => (
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardTitle>{item.title}</IonCardTitle>
                  <IonCardSubtitle>{new Date(item.pubDate).toLocaleString()}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                    Read more
                  </a>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        )}

      </IonContent>
    </>
  );
};

export default FeedPage;
