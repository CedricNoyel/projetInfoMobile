import "./theme/variables.css";
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { desktopOutline, home, receiptOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";

import { Menu } from "./components/Menu";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
import Sessions from "./pages/Sessions/Sessions";
import Announcers from "./pages/Announcers/Announcers";

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
const App: React.FC = () => (
  <IonApp>
    <Menu />
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route path={ROUTES.SESSIONS} component={Sessions} exact />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.NOTES} component={Notes} />
          <Route path={ROUTES.ANNOUNCERS} component={Announcers} />
          <Route
            path={ROUTES.DEFAULT}
            render={() => <Redirect to={ROUTES.HOME} />}
            exact
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="sessions" href={ROUTES.SESSIONS}>
            <IonIcon icon={desktopOutline} />
            <IonLabel>Conférences</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href={ROUTES.HOME}>
            <IonIcon icon={home} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notes" href={ROUTES.NOTES}>
            <IonIcon icon={receiptOutline} />
            <IonLabel>Mes notes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
