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
  IonCardTitle,
  IonPage,
  IonCardSubtitle,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Session, SessionsListDTO } from "../../shared/models/Session";
import { Speaker, SpeakersListDTO } from "../../shared/models/Speaker";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";
import "./Speaker.css";

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
                {speakerData?.country}
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
                        <IonItem key={session.id}>
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
