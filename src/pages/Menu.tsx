import { 
  IonButton,
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonItem, 
    IonMenu, 
    IonMenuToggle, 
    IonPage, 
    IonRouterOutlet, 
    IonSplitPane, 
    IonTitle, 
    IonToast, 
    IonToolbar 
} from '@ionic/react';
import {homeOutline,newspaperOutline, logOutOutline} from 'ionicons/icons'
import { Redirect, Route } from 'react-router';
import Page1 from './Page1';
import Page2 from './Page2';
import Details from './Details';
import { useState } from 'react';

const Menu: React.FC = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  
  const paths =[
    {name:'Home', url: '/it35-app/app/page1', icon: homeOutline},
    {name:'News', url: '/it35-app/app/page2', icon: newspaperOutline},
  ]

  const handleLogout = () => {
    setIsToastOpen(true);
  };

  return (
    <IonPage>
       <IonSplitPane contentId='main'>
      <IonMenu contentId='main'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {paths.map((item, index) => (
          <IonMenuToggle key={index}>
            <IonItem routerLink={item.url} routerDirection='forward'>
              <IonIcon icon={item.icon} slot='start'></IonIcon>
              {item.name}
            </IonItem>
          </IonMenuToggle>
        ))}

      <IonButton
        routerLink='/it35-app/'
        routerDirection='root'
        expand='full'
        onClick={handleLogout} // Trigger toast and logout action
      >
      <IonIcon icon={logOutOutline} slot="start"></IonIcon>
        Logout
      </IonButton>

      <IonToast
        isOpen={isToastOpen}
        position="top"
        message="Logout Successful"
        onDidDismiss={() => setIsToastOpen(false)} 
        duration={500} 
        color="primary"
      />

      </IonContent>
      </IonMenu>

      <IonRouterOutlet id='main'>
        <Route exact path="/it35-app/app/page1" component={Page1} />
        <Route exact path="/it35-app/app/page1/details" component={Details} />
        
        <Route exact path="/it35-app/app/page2" component={Page2} />
        <Route exact path="/it35-app/app">
          <Redirect to="/it35-app/app/page1"/>
        </Route>
      </IonRouterOutlet>

    </IonSplitPane>
    </IonPage>
  );
};

export default Menu;