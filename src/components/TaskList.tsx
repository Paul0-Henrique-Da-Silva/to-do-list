import React from "react";
import { ITask } from "../interfaces/task";

interface Props {
    taskList: ITask[]
}

export const TaskList = ({taskList}: Props) => {
    return(
        <>
            {taskList.length > 0 ? (
                taskList.map((value) => (
                    <div key={value.id}>
                        <div>
                            <p>{value.title}</p>
                            <p>Dificuldade:{value.level}</p>
                        </div>
                        <div>
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
