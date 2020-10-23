/* eslint-disable jsx-a11y/alt-text */
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
  IonAvatar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronForwardOutline, handRight } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Speaker, SpeakersListDTO } from "../../shared/models/Speaker";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";
import "./Speaker.css";

const SpeakersListPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [speakersList, setSpeakersList] = useState<Speaker[]>([]);

  useEffect(() => {
    DevFestData.getSpeakersList().then((result: SpeakersListDTO) => {
      setSpeakersList(Object.values(result));
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
          <IonTitle>Speakers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Loading...</IonTitle>
        ) : (
          <IonList>
            {speakersList.map((speaker) => (
              <IonItem key={speaker.id} routerLink={`/speaker/${speaker.id}`}>
                <IonAvatar>
                  {!!speaker.photoUrl ? (
                    <img src={IMAGE_BASE_URL + speaker.photoUrl} />
                  ) : (
                    !!speaker.companyLogo && (
                      <img src={IMAGE_BASE_URL + speaker.companyLogo} />
                    )
                  )}
                </IonAvatar>
                <IonLabel className={"speakerName"}>{speaker.name}</IonLabel>
                <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};
export default SpeakersListPage;
