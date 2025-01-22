import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { cafeOutline, library, search } from 'ionicons/icons';

import FeedPage from './Tabs/FeedPage';
import LibraryPage from './Tabs/LibraryPage';
import SearchPage from './Tabs/SearchPage';

function Home() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

          <Route exact path="/it35-app/app/home">
            <Redirect  to="/it35-app/app/home/feed"/>
          </Route>

          <Route path="/it35-app/app/home/feed" render={() => <FeedPage />} exact={true} />
          <Route path="/it35-app/app/home/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/it35-app/app/home/search" render={() => <SearchPage />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="feed" href="/it35-app/app/home/feed">
            <IonIcon icon={cafeOutline} />
            <IonLabel>Feed</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/it35-app/app/home/library">
            <IonIcon icon={library} />
            <IonLabel>Library</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/it35-app/app/home/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default Home;
