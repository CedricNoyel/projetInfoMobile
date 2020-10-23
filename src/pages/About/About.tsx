import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './About.css';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';


const Settings: React.FC = () => {
  
  const [connection, setConnexion] = useState('Unknown');
  console.log("=== NETWORK ===" + JSON.stringify(Network));

  useEffect(() => {
    Network.onConnect().subscribe(() => {
      setTimeout(() => {
        setConnexion(Network.type);
        console.log("=== NETWORK EFFECT ===" + JSON.stringify(Network));
      }, 3000);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Informations du téléphone</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Téléphone</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
            <p>Plateforme: {Device.platform}</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <p>Version: {Device.version}</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <p>Modèle: {Device.model}</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <p>Connexion: {connection}</p>
            </IonCol>
          </IonRow>

        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Settings;
