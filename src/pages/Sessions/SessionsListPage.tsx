import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Sessions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Loading...</IonTitle>
        ) : (
          <IonList>
            {sessionsList.map((session) => (
              <IonItem key={session.id} routerLink={`/session/${session.id}`}>
                <IonLabel>{session.title}</IonLabel>
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
