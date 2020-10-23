import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { ROUTES } from "../constants/routes";
import { phonePortrait, people, calendar } from "ionicons/icons";

export const Menu = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink={ROUTES.SPEAKERS}>
            <IonIcon icon={people} slot="start" />
            <IonLabel>Présentateurs</IonLabel>
          </IonItem>

          <IonItem routerLink={ROUTES.AGENDA}>
            <IonIcon icon={calendar} slot="start" />
            <IonLabel>Agenda</IonLabel>
          </IonItem>

          <IonItem routerLink={ROUTES.ABOUT}>
            <IonIcon icon={phonePortrait} slot="start" />
            <IonLabel>Téléphone</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
