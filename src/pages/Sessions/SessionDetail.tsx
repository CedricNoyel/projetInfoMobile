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
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonCardTitle,
  IonCardSubtitle
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Session, SessionsListDTO } from "../../shared/models/Session";
import { Speaker, SpeakersListDTO } from "../../shared/models/Speaker";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";

interface SessionPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SessionDetailPage: React.FC<SessionPageProps> = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sessionData, setSessionData] = useState<Session>();
  const [speakers, setSpeakers] = useState<Speaker[]>();

  useEffect(() => {
    const dataPromises: [Promise<SessionsListDTO>, Promise<SpeakersListDTO>] = [
      DevFestData.getSessionsList(),
      DevFestData.getSpeakersList(),
    ];

    Promise.all(dataPromises).then(([sessionsDTO, speakersDTO]) => {
      const sessionData = sessionsDTO[match.params.id];
      setSessionData(sessionData);

      if (!!sessionData?.speakers) {
        setSpeakers(
          Object.values(sessionData.speakers).map(
            (speakerId) => speakersDTO[speakerId]
          )
        );
      }

      setIsLoaded(true);
      console.log(result)
    });

    DevFestData.getSessionsList().then((result: SessionsListDTO) => {});
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
            
            {sessionData?.image && (
                  <IonImg src={IMAGE_BASE_URL + sessionData.image}></IonImg>
            )}
            <IonCardHeader>
              <IonCardTitle>{sessionData?.title}</IonCardTitle>
            <IonCardSubtitle>{sessionData?.tags && sessionData.tags[0]}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {sessionData?.description}
              {!!speakers && (
                <div>
                  Speakers :
                  {speakers.map((speaker) => (
                    <IonItem key={speaker.id}>
                      <IonThumbnail>
                        {!!speaker.photoUrl ? (
                          <img src={IMAGE_BASE_URL + speaker.photoUrl} />
                        ) : (
                          !!speaker.companyLogo && (
                            <img src={IMAGE_BASE_URL + speaker.companyLogo} />
                          )
                        )}
                      </IonThumbnail>
                      <IonLabel>{speaker.name}</IonLabel>
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

export default SessionDetailPage;
