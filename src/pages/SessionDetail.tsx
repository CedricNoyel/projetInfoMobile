import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Session, SessionsListDTO } from "../shared/models/Session";

const IMAGE_BASE_URL = "https://devfest2018.gdgnantes.com/";

interface SessionPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SessionDetailPage: React.FC<SessionPageProps> = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sessionData, setSessionData] = useState<Session>();

  useEffect(() => {
    fetch("https://devfest-nantes-2018-api.cleverapps.io/sessions")
      .then((res) => res.json())
      .then((result: SessionsListDTO) => {
        setSessionData(result[match.params.id]);
        setIsLoaded(true);
      });
  }, [match.params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/sessions" />
          </IonButtons>
          <IonTitle>Sessions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Loading...</IonTitle>
        ) : (
          <IonCard>
            <IonCardHeader>
              <IonTitle>
                <div className="ion-text-wrap">{sessionData?.title}</div>
              </IonTitle>
            </IonCardHeader>
            <IonCardContent>
              {!!sessionData?.image && (
                <IonImg src={IMAGE_BASE_URL + sessionData.image}></IonImg>
              )}
              {/* <IonText>{sessionData?.description}</IonText>
              {!!sessionData?.speakers && 
              <div>{sessionData.speakers.map(speaker => {
                
              })}</div>} */}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SessionDetailPage;
