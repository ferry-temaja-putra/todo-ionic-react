import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader } from "@ionic/react";
import { Fragment } from "react";
import { Task } from "../models/Task"

export interface TaskListPropsType {
    tasks: Task[]
    onDeletingTask: (taskId: string) => void
}

export const TaskList: React.FC<TaskListPropsType> = (props) => {
    return (
        <Fragment> 
            <IonList>
                <IonListHeader><h1>Tasks:</h1></IonListHeader>
                {
                    props.tasks.map(task => {
                        return (            
                            <IonItemSliding key={task.id}>
                                <IonItem key={task.id}>
                                <IonLabel>
                                    <h2>{`${task.date.toDateString()} ${task.date.toTimeString()}`}</h2>
                                    <h1>{task.content}</h1>
                                </IonLabel>
                                </IonItem>
                                <IonItemOptions side='end'>
                                <IonItemOption color='danger' onClick={() => {
                                    props.onDeletingTask(task.id);
                                }}>Delete</IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        )
                    })            
                } 
            </IonList>           
        </Fragment>        
    )
}