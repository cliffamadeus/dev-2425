import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const FeedPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Feed</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Feed Page Content
      </div>
    </IonContent>
  </>
);

export default FeedPage;
