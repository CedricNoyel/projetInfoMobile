/* eslint-disable jsx-a11y/alt-text */
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
  IonRow,
  IonAvatar,
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
import "./SessionDetail.css";

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
    });

    DevFestData.getSessionsList().then((result: SessionsListDTO) => {});
  }, [match.params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink={ROUTES.SESSIONS}
              className="back-button-custom"
            >
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </IonButtons>

          <IonTitle>Sessions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Chargement...</IonTitle>
        ) : (
          <IonCard>
            {sessionData?.image && (
              <IonImg src={IMAGE_BASE_URL + sessionData.image}></IonImg>
            )}
            <IonCardHeader>
              <IonCardTitle className={"center-text"}>
                {sessionData?.title}
              </IonCardTitle>
              <IonCardSubtitle className={"center-text"}>
                {sessionData?.tags && sessionData.tags.map((tag) => tag)}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonTitle className={"center-text"}>Contenu :</IonTitle>
                    <p>{sessionData?.description}</p>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonTitle className={"center-text"}>
                      Présentateurs :
                    </IonTitle>
                    <div style={{ marginTop: "6px" }}>
                      {speakers?.map((speaker) => (
                        <IonItem
                          key={speaker.id}
                          routerLink={`/speaker/${speaker.id}`}
                          lines="none"
                        >
                          <IonAvatar className="speakerImg">
                            {!!speaker.photoUrl ? (
                              <img src={IMAGE_BASE_URL + speaker.photoUrl} />
                            ) : (
                              !!speaker.companyLogo && (
                                <img
                                  src={IMAGE_BASE_URL + speaker.companyLogo}
                                />
                              )
                            )}
                          </IonAvatar>
                          <p>{speaker.name}</p>
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

export default SessionDetailPage;
