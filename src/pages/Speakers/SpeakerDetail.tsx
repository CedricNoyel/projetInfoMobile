/* eslint-disable jsx-a11y/alt-text */
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Session, SessionsListDTO } from "../../shared/models/Session";
import { Speaker, SpeakersListDTO } from "../../shared/models/Speaker";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";

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

      setSessions(
        Object.values(sessionsDTO).filter(
          (session) =>
            !!session.speakers && session.speakers.includes(speakerData.id)
        )
      );

      setIsLoaded(true);
    });

    DevFestData.getSpeakersList().then((result: SpeakersListDTO) => {});
  }, [match.params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/speakers" />
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
                    <IonItem key={session.id}>
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
