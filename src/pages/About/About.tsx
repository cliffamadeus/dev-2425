import { 
  IonAvatar,
  IonButton,
  IonButtons,
    IonCol,
    IonContent, 
    IonGrid, 
    IonHeader, 
    IonInput, 
    IonInputPasswordToggle, 
    IonItem, 
    IonMenuButton, 
    IonPage, 
    IonRow, 
    IonTextarea, 
    IonTitle, 
    IonToast, 
    IonToolbar 
} from '@ionic/react';

const About: React.FC = () => {
      
  return (
    <IonPage>
          <IonContent fullscreen>
            <IonGrid className='avatar-flex'>
            <IonRow>
              <IonCol></IonCol>
              <IonCol>
                <h1>About</h1>
                <IonAvatar className='login-avatar'>
                  <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                </IonAvatar>
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
            </IonGrid>
            <div  className='login-content'>
    
              <IonButton
                id="combined-button"
                
                expand="full"
                shape="round"
                fill="outline"
              >
               Signup
              </IonButton>
            </div>
            
            
    
          </IonContent>
        </IonPage>
  );
};

export default About;