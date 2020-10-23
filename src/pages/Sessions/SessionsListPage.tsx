import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Session, SessionsListDTO } from "../../shared/models/Session";
import { DevFestData } from "../../shared/utils/DevFestData";

const SessionsListPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sessionsList, setSessionsList] = useState<Session[]>([]);

  useEffect(() => {
    DevFestData.getSessionsList().then((result: SessionsListDTO) => {
      setSessionsList(Object.values(result));
      setIsLoaded(true);
    });
  }, []);

  return (
    <IonPage>
      <Header title="Sessions" />
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Loading...</IonTitle>
        ) : (
          <IonList>
            {sessionsList.map((session, idx) => (
              <IonItem key={session.id} routerLink={`/session/${session.id}`}>
                <IonLabel>{idx + " - " + session.title}</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};
export default SessionsListPage;
