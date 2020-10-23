import "./Sessions.css";

import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../../components/ExploreContainer";
import { Header } from "../../components/Header";

const Sessions: React.FC = () => {
  return (
    <IonPage>
      <Header title="Sessions" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sessions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Sessions Page" />
      </IonContent>
    </IonPage>
  );
};

export default Sessions;
