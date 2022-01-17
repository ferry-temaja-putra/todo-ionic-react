import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { Task } from '../models/Task';
import './Home.css';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskContent, setTaskContent] = useState<string>('');
  const inputTaskRef = useRef<any>(null);
  const taskListItems = tasks.map(task => {
    return(
      <IonItemSliding>
        <IonItem key={task.id}>
          <IonLabel>
            <h2>{`${task.date.toDateString()} ${task.date.toTimeString()}`}</h2>
            <h1>{task.content}</h1>
          </IonLabel>
        </IonItem>
        <IonItemOptions side='end'>
          <IonItemOption color='danger' onClick={() => {
            const updatedTasks = tasks.filter(filteredTask => filteredTask.id !== task.id);
            setTasks(updatedTasks);
          }}>Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    )
  });

  useEffect(() => {
    inputTaskRef.current.setFocus();
  },[]);

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
              <IonButton class='ion-margin-bottom' expand='block' onClick={() => {
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

              <IonList>
                <IonListHeader><h1>Tasks:</h1></IonListHeader>
                {taskListItems}
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
