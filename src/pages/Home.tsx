import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';
import { Task } from '../models/Task';
import './Home.css';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);  

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
              <TaskInput onAddingTask={(taskContent) => {
                const task: Task = {
                  id: uuidv1(),
                  date: new Date(),
                  content: taskContent
                };

                const updatedTasks = tasks.concat(task);
                setTasks(updatedTasks);
              }} />
              
              <TaskList tasks={tasks} onDeletingTask={taskId => {
                const updatedTasks = tasks.filter(filteredTask => filteredTask.id !== taskId);
                setTasks(updatedTasks);
              }}/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
