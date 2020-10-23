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
import { settings, megaphone, home } from "ionicons/icons";

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
            <IonIcon icon={megaphone} slot="start" />
            <IonLabel>Présentateurs</IonLabel>
          </IonItem>

          <IonItem routerLink={ROUTES.SETTINGS}>
            <IonIcon icon={settings} slot="start" />
            <IonLabel>Paramètres</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
