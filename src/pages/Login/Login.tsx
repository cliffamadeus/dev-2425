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
        navigation.push('/dev-2425/app','root','replace');
    }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className='avatar-flex'>
        <IonRow>
          <IonCol></IonCol>
          <IonCol>
            <IonAvatar className='login-avatar'>
              <img alt="Silhouette of a person's head" src="https://raw.githubusercontent.com/mhshariatipour1378/Avatars-Placeholder/refs/heads/master/back-end/images/boy/AV13.png" />
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
          position='bottom'
          message="Login Successful"
          onDidDismiss={() => setIsOpen(false)}
          duration={400}
          color="success"
        ></IonToast>

      </IonContent>
    </IonPage>
  );
};

export default Login;