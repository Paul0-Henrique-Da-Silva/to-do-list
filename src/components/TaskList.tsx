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
                        <p>{value.title}</p>
                    </div>
                ))
            ): (
                <p>Não tem tarefas cadastradas!</p>
            )}
        </>
    )
}
