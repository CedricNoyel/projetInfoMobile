import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonMenuButton,
} from "@ionic/react";
import React from "react";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{props.title}</IonTitle>
        <IonButton slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};
