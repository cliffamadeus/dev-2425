import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

const SearchPage = () => (
  <>
    
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Search</IonTitle>
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
        Search content
      </div>
    </IonContent>
  </>
);

export default SearchPage;
