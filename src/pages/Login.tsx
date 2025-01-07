import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    useIonRouter,
    IonButton,
    IonItem,
    IonList,
    IonTextarea,
    IonInput,
    IonInputPasswordToggle,
    IonAvatar,
    IonCol,
    IonGrid,
    IonRow,
    IonToast
} from '@ionic/react';
import './Login.css';
import { useState } from 'react';

const Login: React.FC = () => {
    const navigation = useIonRouter();
    const [isOpen, setIsOpen] = useState(false);

    const doLogin = () =>{
        navigation.push('/it35-app/app','root','replace');
    }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className='avatar-flex'>
        <IonRow>
          <IonCol></IonCol>
          <IonCol>
            <IonAvatar className='login-avatar'>
              <img alt="Silhouette of a person's head" src="https://avatar.iran.liara.run/public/13" />
            </IonAvatar>
          </IonCol>
          <IonCol></IonCol>
        </IonRow>
        </IonGrid>
        <div  className='login-content'>
          <IonItem>
            <IonTextarea label="Username" placeholder="Enter Username"></IonTextarea>
          </IonItem>
          <IonItem>
          <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
          </IonItem>
          <IonButton
            id="login"
            onClick={() => {
              doLogin(); 
              setIsOpen(true); 
            }}
            expand="full"
            shape="round"
          >
           Login
          </IonButton>

          <IonButton
            id="combined-button"
            onClick={() => {
              doLogin(); 
              setIsOpen(true); 
            }}
            expand="full"
            shape="round"
            fill="outline"
          >
           Signup
          </IonButton>
        </div>
        
        <IonToast
          isOpen={isOpen}
          position='top'
          message="Login Successful"
          onDidDismiss={() => setIsOpen(false)}
          duration={500}
          color="primary"
        ></IonToast>

      </IonContent>
    </IonPage>
  );
};

export default Login;