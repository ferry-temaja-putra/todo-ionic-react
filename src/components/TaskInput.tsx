import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { Fragment, useEffect, useRef, useState } from "react";

export interface TaskInputPropsType {
    onAddingTask: (taskContent: string) => void
}

export const TaskInput: React.FC<TaskInputPropsType> = (props) => {

    const [taskContent, setTaskContent] = useState<string>('');
    const inputTaskRef = useRef<any>(null);
    
    useEffect(() => {
        inputTaskRef.current.setFocus();
      },[]);
      
    return (
        <Fragment>
            <IonItem class='ion-margin-bottom'>
                <IonLabel position='floating'>Enter the task</IonLabel>
                <IonInput ref={inputTaskRef} value={taskContent} onIonChange={(e) => {
                    let inputValue = '';
                    if (e.detail.value) {
                        inputValue = e.detail.value;
                    }
                    setTaskContent(inputValue);
                }} />
            </IonItem>
            <IonButton class='ion-margin-bottom' expand='block' onClick={() => {
                if (!taskContent) return;
                props.onAddingTask(taskContent);
                setTaskContent('');
                inputTaskRef.current.setFocus();
            }}>Add</IonButton>
        </Fragment>
    )
}