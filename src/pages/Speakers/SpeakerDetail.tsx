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
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { ROUTES } from "../../constants/routes";
import { Session, SessionsListDTO } from "../../shared/models/Session";
import { Speaker, SpeakersListDTO } from "../../shared/models/Speaker";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";
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
      DevFestData.getSpeakersList(),
      DevFestData.getSessionsList(),
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

    DevFestData.getSpeakersList().then((result: SpeakersListDTO) => {});
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
          <IonTitle>Speakers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Loading...</IonTitle>
        ) : (
          <IonCard>
            <IonCardHeader>
              <IonTitle>
                <div className="ion-text-wrap">{speakerData?.name}</div>
              </IonTitle>
            </IonCardHeader>
            <IonCardContent>
              {!!speakerData?.photoUrl ? (
                <IonImg src={IMAGE_BASE_URL + speakerData?.photoUrl} />
              ) : (
                !!speakerData?.companyLogo && (
                  <IonImg src={IMAGE_BASE_URL + speakerData?.companyLogo} />
                )
              )}
              <IonText>{speakerData?.bio}</IonText>
              {!!sessions && (
                <div>
                  Sessions :
                  {sessions.map((session) => (
                    <IonItem
                      key={session.id}
                      routerLink={"/session/" + session.id}
                    >
                      <IonLabel>{session.title}</IonLabel>
                    </IonItem>
                  ))}
                </div>
              )}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SpeakerDetailPage;
