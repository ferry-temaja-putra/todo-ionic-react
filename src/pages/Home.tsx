import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './Home.css';

interface Task {
  id: string;
  date: Date;
  content: string;
};

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskContent, setTaskContent] = useState<string>('');
  const inputTaskRef = useRef<any>(null);

  useEffect(() => {
    inputTaskRef.current.setFocus();
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>React Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow class='ion-justify-content-center'>
            <IonCol sizeXs='12' sizeLg='6' sizeXl='4'>
              <IonItem class='ion-margin-bottom'>
                <IonLabel position='floating'>Enter the task</IonLabel>
                <IonInput ref={inputTaskRef} value={taskContent} onIonChange={(e) => {
                  let inputValue = '';
                  if (e.detail.value) {
                    inputValue  = e.detail.value;
                  }
                  setTaskContent(inputValue);
                }} />
              </IonItem>
              <IonButton expand='block' onClick={() => {
                if (!taskContent) {
                  return;
                }
                const task: Task = {
                  id: uuidv1(),
                  date: new Date(),
                  content: taskContent
                };

                const updatedTasks = tasks.concat(task);

                setTasks(updatedTasks);
                setTaskContent('');
                inputTaskRef.current.setFocus();
                console.log(tasks);
              }}>Add</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
