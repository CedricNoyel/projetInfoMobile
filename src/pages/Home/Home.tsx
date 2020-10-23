import "./Home.css";

import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Header } from "../../components/Header";
import { ROUTES } from "../../constants/routes";

// import ExploreContainer from "../components/ExploreContainer";
const logoUrl: string = "assets/images/imt_atlantique_logo.png";
const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title="Accueil" />
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
            <IonButton routerLink={ROUTES.SESSIONS} color="light">
              Voir les conférences
            </IonButton>
          </div>
          <div className={"spacingTop"}>
            <IonButton routerLink={ROUTES.SPEAKERS} color="light">
              Voir les présentateurs
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
