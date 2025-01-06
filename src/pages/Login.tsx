import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    useIonRouter,
    IonButton
} from '@ionic/react';

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () =>{
        navigation.push('/it35-app/app','root','replace');
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={() => doLogin()} expand='full'>
            Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;