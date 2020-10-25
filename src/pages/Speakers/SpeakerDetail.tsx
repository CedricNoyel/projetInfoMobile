/* eslint-disable jsx-a11y/alt-text */
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonCardTitle,
  IonPage,
  IonCardSubtitle,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { ROUTES } from "../../constants/routes";
import { Session, SessionsListDTO } from "../../shared/models/Session";
import { Speaker, SpeakersListDTO } from "../../shared/models/Speaker";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";
import { StorageService } from "../../shared/utils/StorageService";
import "./Speaker.css";
import "./SpeakerDetail.css";

interface SpeakerPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SpeakerDetailPage: React.FC<SpeakerPageProps> = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [speakerData, setSpeakerData] = useState<Speaker>();
  const [sessions, setSessions] = useState<Session[]>();

  useEffect(() => {
    const dataPromises: [Promise<SpeakersListDTO>, Promise<SessionsListDTO>] = [
      StorageService.getObject("speakers"),
      StorageService.getObject("sessions"),
    ];

    Promise.all(dataPromises).then(([speakersDTO, sessionsDTO]) => {
      const speakerData = speakersDTO[match.params.id];
      setSpeakerData(speakerData);

      const speakerSessions = Object.values(sessionsDTO).filter(
        (session) =>
          !!session.speakers &&
          session.speakers
            .map((speakerId) => speakerId.toString())
            .includes(speakerData.id.toString())
      );

      setSessions(speakerSessions);

      setIsLoaded(true);
    });
  }, [match.params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink={ROUTES.SPEAKERS}
              className="back-button-custom"
            >
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Présentateurs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Chargement...</IonTitle>
        ) : (
          <IonCard>
            {speakerData?.photoUrl && (
              <img
                className={"SpeakerDetailPhoto"}
                src={IMAGE_BASE_URL + speakerData.photoUrl}
              ></img>
            )}
            <IonCardHeader>
              <IonCardTitle className={"center-text"}>
                {speakerData?.name}
              </IonCardTitle>
              <IonCardSubtitle className={"center-text"}>
                {"Pays: " + speakerData?.country}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonTitle className={"center-text"}>Bio :</IonTitle>
                    <p>{speakerData?.bio}</p>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonTitle className={"center-text"}>Conférences :</IonTitle>
                    <div style={{ marginTop: "6px" }}>
                      {sessions?.map((session) => (
                        <IonItem
                          key={session.id}
                          lines="none"
                          routerLink={`/session/${session.id}`}
                        >
                          <p>{session.title}</p>
                        </IonItem>
                      ))}
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SpeakerDetailPage;
