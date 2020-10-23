import { IonPage } from "@ionic/react";
import React from "react";

import { Header } from "../../components/Header";

// import ExploreContainer from "../components/ExploreContainer";
const logoUrl: string = "assets/images/imt_atlantique_logo.png";
const Announcers: React.FC = () => {
  return (
    <IonPage>
      <Header title="Présentateurs" />
    </IonPage>
  );
};

export default Announcers;
