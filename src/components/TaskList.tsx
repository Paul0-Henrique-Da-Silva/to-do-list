import React from "react";
import { ITask } from "../interfaces/task";
import styles from "../components/TaskList.module.css"

interface Props {
    taskList: ITask[]
}

export const TaskList = ({taskList}: Props) => {
    return(
        <>
            {taskList.length > 0 ? (
                taskList.map((value) => (
                    <div key={value.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{value.title}</h4>
                            <p>Dificuldade:{value.level}</p>
                        </div>
                        <div className={styles.actions}>
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-trash"></i>
                        </div>
                    </div>
                ))
            ): (
                <p>Não tem tarefas cadastradas!</p>
            )}
        </>
    )
}
