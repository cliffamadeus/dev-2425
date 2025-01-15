import { 
  IonAvatar,
  IonButton,
  IonButtons,
    IonCol,
    IonContent, 
    IonGrid, 
    IonHeader, 
    IonItem, 
    IonLabel, 
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

            <IonItem> 
              <IonLabel>
                <h1>CLIFFMEISTER</h1>
                <p>Programmer</p>
              </IonLabel>
            </IonItem>
                
          </div>
          
          <IonItem> 
              <IonLabel>
                <h1>About</h1>
                <p></p>
              </IonLabel>
          </IonItem>

          <IonItem> 
              <IonLabel>
                <p>This application is built by the greatest slacker that's ever lived</p>
              </IonLabel>
          </IonItem>

          </IonContent>
        </IonPage>
  );
};

export default About;