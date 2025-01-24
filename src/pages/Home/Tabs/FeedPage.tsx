import React, { useEffect, useState, useCallback } from 'react';
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

  // Function to fetch and parse RSS feed
  const fetchRSSFeed = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://www.philstar.com/rss/headlines`
      );
      if (!response.ok) throw new Error("Failed to fetch the RSS feed.");

      const data = await response.json();
      const feedItems = data.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        description: item.description,
        pubDate: item.pubDate,
      }));
      setItems(feedItems);
    } catch (error) {
      console.error('Failed to load feed:', error);
    }
  }, []);

  useEffect(() => {
    fetchRSSFeed();
  }, [fetchRSSFeed]);

  const handleRefresh = async (event: CustomEvent) => {
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

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        {items.length === 0 && (
          <div className="feed-error">
            <h1>Failed to load feed. Please refresh and try again.</h1>
            <IonButton onClick={fetchRSSFeed} color="primary">
              Refresh
            </IonButton>
          </div>
        )}

        <IonList>
          {items.map((item, index) => (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardTitle>{item.title}</IonCardTitle>
                <IonCardSubtitle>{new Date(item.pubDate).toLocaleString()}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-link"
                >
                  Read more
                </a>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default FeedPage;
