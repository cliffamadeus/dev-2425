import {
  IonAvatar,
  IonButton,
  IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonProgressBar,
    IonTitle,
    IonToast,
    IonToolbar,
    IonFooter,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCard,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';
import './About.css';
import { useEffect, useState  } from 'react';

const About: React.FC = () => {
  const [buffer1, setBuffer1] = useState(0.06);
  const [progress1, setProgress1] = useState(0);
  const [buffer2, setBuffer2] = useState(0.1);
  const [progress2, setProgress2] = useState(0);

  const [energy, setEnergy] = useState(0.1);
  const [energyProgress, setEnergyProgress] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setBuffer1((prev) => Math.min(prev + 0.06, 1));
      setProgress1((prev) => Math.min(prev + 0.05, 1));
      setBuffer2((prev) => Math.min(prev + 0.08, 1));
      setProgress2((prev) => Math.min(prev + 0.07, 1));

      setEnergy((prev) => Math.min(prev + 0.03, 1));
      setEnergyProgress((prev) => Math.min(prev + 0.03, 1));


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

        setEnergy(0.03);
        setEnergyProgress(0);
      }, 1000);
    }
  }, [progress1, progress2, energy]);

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
                Energy<IonProgressBar color="warning" buffer={energy} value={energyProgress}></IonProgressBar>
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
          <IonGrid>
            <IonRow>
              <IonCol>
              <IonCard color="light">
                <IonCardHeader>
                  <IonCardTitle>Cards Cards!</IonCardTitle>
                  <IonCardSubtitle>This developer loves using cards</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent></IonCardContent>
              </IonCard>
              </IonCol>

              <IonCol>
              <IonCard color="medium">
                 <IonCardHeader>
                   <IonCardTitle>Because Cards</IonCardTitle>
                   <IonCardSubtitle>are awesome!</IonCardSubtitle>
                 </IonCardHeader>

                 <IonCardContent></IonCardContent>
               </IonCard>

              </IonCol>
            </IonRow>
          </IonGrid>
          <IonCard color="dark" className="ion-text-center">
             <IonCardHeader>
               <IonCardTitle>Who doesn't love cards?</IonCardTitle>
               <IonCardSubtitle>if you do, get a life</IonCardSubtitle>
             </IonCardHeader>

             <IonCardContent></IonCardContent>
           </IonCard>





          </IonContent>
          <IonToolbar>
            <IonTitle className="ion-text-center">CAFE All Rights Reserved 2025</IonTitle>
          </IonToolbar>
        </IonPage>
  );
};

export default About;
