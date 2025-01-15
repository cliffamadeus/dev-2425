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
    IonProgressBar, 
    IonRow, 
    IonTitle, 
    IonToast, 
    IonToolbar 
} from '@ionic/react';
import './About.css';
import { useEffect, useState  } from 'react';

const About: React.FC = () => {
  const [buffer1, setBuffer1] = useState(0.06);
  const [progress1, setProgress1] = useState(0);
  const [buffer2, setBuffer2] = useState(0.1); // Different initial value
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuffer1((prev) => Math.min(prev + 0.06, 1)); // Increment buffer1
      setProgress1((prev) => Math.min(prev + 0.05, 1)); // Increment progress1
      setBuffer2((prev) => Math.min(prev + 0.08, 1)); // Increment buffer2
      setProgress2((prev) => Math.min(prev + 0.07, 1)); // Increment progress2
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress1 >= 1 && progress2 >= 1) {
      setTimeout(() => {
        setBuffer1(0.06);
        setProgress1(0);
        setBuffer2(0.1);
        setProgress2(0);
      }, 1000);
    }
  }, [progress1, progress2]);
  
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
                Looks<IonProgressBar buffer={buffer1} value={progress1}></IonProgressBar>
                Awesomeness<IonProgressBar buffer={buffer2} value={progress2}></IonProgressBar>
               
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