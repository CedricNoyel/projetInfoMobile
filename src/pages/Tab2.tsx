import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonThumbnail, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonThumbnail slot="start">
            {/* <IonImg src={image.src} /> */}
          </IonThumbnail>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
