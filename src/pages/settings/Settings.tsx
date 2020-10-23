import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Settings.css';
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
          <IonTitle>Paramètres</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Paramètres</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
            <p>Plateforme: {Device.platform.toString()}</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <p>Version: {Device.version.toString()}</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <p>Modèle: {Device.model.toString()}</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <p>Connexion: {connection.toString()}</p>
            </IonCol>
          </IonRow>

        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Settings;
