import React from "react";
import { Redirect, Route } from "react-router-dom";
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

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { desktopOutline, home, receiptOutline } from "ionicons/icons";

import { Menu } from "./components/Menu";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
import About from "./pages/About/About";
import Agenda from "./pages/Agenda/Agenda";

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import SessionsListPage from "./pages/Sessions/SessionsListPage";
import SessionDetailPage from "./pages/Sessions/SessionDetail";
import SpeakersListPage from "./pages/Speakers/SpeakersListPage";
import SpeakerDetailPage from "./pages/Speakers/SpeakerDetail";

/* Optional CSS utils that can be commented out */
/* Theme variables */
const App: React.FC = () => (
  <IonApp>
    <Menu />
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.NOTES} component={Notes} />
          <Route path={ROUTES.SPEAKERS} component={SpeakersListPage} exact />
          <Route path={ROUTES.SPEAKER} component={SpeakerDetailPage} exact />
          <Route path={ROUTES.SESSIONS} component={SessionsListPage} exact />
          <Route path={ROUTES.SESSION} component={SessionDetailPage} exact />
          <Route path={ROUTES.AGENDA} component={Agenda} />
          <Route path={ROUTES.ABOUT} component={About} />
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
