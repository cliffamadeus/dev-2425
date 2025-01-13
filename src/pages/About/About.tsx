import { 
  IonAvatar,
  IonButton,
  IonButtons,
    IonCol,
    IonContent, 
    IonGrid, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonRow, 
    IonTitle, 
    IonToast, 
    IonToolbar 
} from '@ionic/react';
import './About.css';

const About: React.FC = () => {
      
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen>
          <div className='about-flex'>
            <IonAvatar className='about-avatar'>
                    <img alt="Silhouette of a person's head" src="https://raw.githubusercontent.com/cliffamadeus/it35-app/refs/heads/dev-profile/src/pages/About/avatar.png"/>
            </IonAvatar>        
          </div>
          </IonContent>
        </IonPage>
  );
};

export default About;