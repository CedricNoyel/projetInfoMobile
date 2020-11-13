/* eslint-disable jsx-a11y/alt-text */
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonAvatar,
  IonTitle,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Speaker, SpeakersListDTO } from "../../shared/models/Speaker";
import { DevFestData, IMAGE_BASE_URL } from "../../shared/utils/DevFestData";
import { StorageService } from "../../shared/utils/StorageService";
import "./Speaker.css";

const SpeakersListPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [speakersList, setSpeakersList] = useState<Speaker[]>([]);

  const getStorageSessionList = async () => {
    return await StorageService.getObject("speakers");
  };

  useEffect(() => {
    getStorageSessionList().then((result) => {
      setSpeakersList(Object.values(result));
      setIsLoaded(true);
    });
  }, []);

  return (
    <IonPage>
      <Header title="Présentateurs" />
      <IonContent>
        {!isLoaded ? (
          <IonTitle>Chargement...</IonTitle>
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
