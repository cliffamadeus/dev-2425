import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const LibraryPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Library</IonTitle>
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
        Library content
      </div>
    </IonContent>
  </>
);

export default LibraryPage;
