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
  IonTextarea,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { ROUTES } from "../../constants/routes";
import { Session, SessionsListDTO } from "../../shared/models/Session";
import { Note, NotesListDTO } from "../../shared/models/Note";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";
import "./Notes.css";

interface NotePageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const NoteDetailPage: React.FC<NotePageProps> = ({ match }) => {
  const [text, setText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [session, setSession] = useState<Session>();

  const getSession = async () => {
    const sessionsDTO = await DevFestData.getSessionsList();
    const sessionData = sessionsDTO[match.params.id];
    setSession(sessionData);
    setIsLoaded(true);
  };

  useEffect(() => {
    getSession();
  }, [match.params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink={ROUTES.NOTES} className="back-button-custom">
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
            <IonCardHeader>
              <IonCardTitle className={"center-text"}>
                <a className={"no-link"} href={`/session/${session?.id}`}>
                  {session?.title}
                </a>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonTextarea
                placeholder="Entrez vos notes ici ..."
                value={text}
                onIonChange={(e) => setText(e.detail.value!)}
                rows={20}
              ></IonTextarea>
              <IonButton color="dark">Sauvegarder</IonButton>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NoteDetailPage;
