import { 
    IonBackButton,
    IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const Details: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton defaultHref='/it35-app/app/page1' />
                </IonButtons>
                <IonTitle>Page 1 Details</IonTitle>

            </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'></IonContent>
    </IonPage>
  );
};

export default Details;