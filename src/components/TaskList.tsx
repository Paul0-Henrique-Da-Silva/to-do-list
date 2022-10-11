import React from "react";
import { ITask } from "../interfaces/task";
import styles from "../components/TaskList.module.css"

interface Props {
    taskList: ITask[]
    handleDel(id: number): void
    handleEdit(task: ITask): void
}

export const TaskList = ({taskList, handleDel, handleEdit}: Props) => {
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
                            <i className="bi bi-pencil" onClick={() => handleEdit(value)}></i>
                            <i className="bi bi-trash" onClick={() => handleDel(value.id)}></i>
                        </div>
                    </div>
                ))
            ): (
                <p>Não tem tarefas cadastradas!</p>
            )}
        </>
    )
}
