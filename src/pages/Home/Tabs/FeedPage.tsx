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
} from '@ionic/react';

const FeedPage: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    // Initial load of items
    const initialItems = [];
    for (let i = 1; i <= 10; i++) {
      initialItems.push(`Item ${i}`);
    }
    setItems(initialItems);
  }, []);

  const loadMoreItems = (event: CustomEvent<void>) => {
    setTimeout(() => {
      const moreItems: string[] = [];
      for (let i = items.length + 1; i <= items.length + 20; i++) {
        moreItems.push(`Item ${i}`);
      }
      setItems((prevItems) => [...prevItems, ...moreItems]);
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, 1000);
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
        <IonList>
          {items.map((item, index) => (
              <IonCard key={item}>
              <img  src={`https://picsum.photos/600/200?random=${index}`}
                  alt="avatar" />
              <IonCardHeader>
                <IonCardTitle>Feed Photo</IonCardTitle>
                <IonCardSubtitle></IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
            </IonCard>
             
          ))}
        </IonList>

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
