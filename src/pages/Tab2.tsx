import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonThumbnail,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const logoUrl: string = "assets/images/imt_atlantique_logo.png";
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

        <IonThumbnail className="logo">
          <IonImg src={logoUrl} />
        </IonThumbnail>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        <div className={"container"}>
          <strong>Conférences</strong>
          <p>du 23/10/2018 au 27/10/2018</p>
          
          <div className={"spacingTop"}>
            <IonButton routerLink="/sessions"  color="light">Voir les conférences</IonButton>
          </div>
          <div className={"spacingTop"}>
              <IonButton routerLink="/presentateurs" color="light">Voir les présentateurs</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
