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
import {homeOutline,newspaperOutline, logOutOutline, informationCircleOutline} from 'ionicons/icons'
import { Redirect, Route } from 'react-router';
import Home from './Home/Home';
import About from './About/About';
import Details from './Home/Details';
import { useState } from 'react';

const Menu: React.FC = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);

  const paths =[
    {name:'Home', url: '/it35-app/app/home', icon: homeOutline},
    {name:'About', url: '/it35-app/app/about', icon: informationCircleOutline},
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
        <Route exact path="/it35-app/app/home" component={Home} />
        <Route exact path="/it35-app/app/home/details" component={Details} />

        <Route exact path="/it35-app/app/about" component={About} />
        <Route exact path="/it35-app/app">
          <Redirect to="/it35-app/app/home"/>
        </Route>
      </IonRouterOutlet>

    </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
