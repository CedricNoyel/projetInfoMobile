import "./Notes.css";

import { IonButton, IonContent, IonPage, IonTextarea } from "@ionic/react";
import React, { useState } from "react";

import { Header } from "../../components/Header";

interface NotesProps {
  sesssionId: number | undefined;
  sessionTitle: string | undefined;
}

const Notes: React.FC<NotesProps> = (props: NotesProps) => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <Header title="Mes notes" />
      <IonContent>
        <div>{props.sessionTitle}</div>
        <IonTextarea
          rows={10}
          cols={20}
          placeholder="Entrez vos notes ici..."
          value={text}
          onIonChange={(e) => setText(e.detail.value!)}
        />
        <IonButton color="dark">Sauvegarder</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Notes;
