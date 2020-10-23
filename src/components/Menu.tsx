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
          <IonItem routerLink={ROUTES.ANNOUNCERS}>
            <IonIcon name="mail" slot="start"></IonIcon>
            <IonLabel>Présentateurs</IonLabel>
          </IonItem>

          <IonItem routerLink={ROUTES.SETTINGS}>
            <IonIcon name="settings" slot="start"></IonIcon>
            <IonLabel>Paramètres</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
