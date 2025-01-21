import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet,
IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton,IonTitle, IonContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { cafeOutline, radio, library, search } from 'ionicons/icons';

import FeedPage from './Tabs/FeedPage';
import LibraryPage from './Tabs/LibraryPage';
import SearchPage from './Tabs/SearchPage';

function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>

      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/" to="/feed" />

            <Route path="/feed" render={() => <FeedPage />} exact={true} />
            <Route path="/library" render={() => <LibraryPage />} exact={true} />
            <Route path="/search" render={() => <SearchPage />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="feed" href="/feed">
              <IonIcon icon={cafeOutline} />
              <IonLabel>Feed</IonLabel>
            </IonTabButton>

            <IonTabButton tab="library" href="/library">
              <IonIcon icon={library} />
              <IonLabel>Library</IonLabel>
            </IonTabButton>

            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>


      </IonContent>
    </IonPage>


  );
}
export default Home;
