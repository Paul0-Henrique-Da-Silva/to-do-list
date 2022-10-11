import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import styles from "./TaskForm.module.css"

import { ITask } from "../interfaces/task"

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export const TaskForm = ({btnText, taskList, setTaskList}: Props) => {
    
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [level, setLevel] = useState<number>(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") 
            { setTitle(e.target.value)}
        else { setLevel(parseInt(e.target.value))}    
    }

    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const id = Math.floor(Math.random() * 1000)
      const newTash: ITask = {id, title, level}
      setTaskList!([...taskList, newTash])
      setTitle("")
      setLevel(0)
      console.log(taskList)
    }

    return(
       <form onSubmit={addTaskHandle} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" value={title}
                placeholder="Título da tarefa" onChange={handleChange}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="level">Dificuldade:</label>
                <input type="text" name="level" value={level}
                placeholder="Dificuldade da tarefa" onChange={handleChange}/>
            </div>
            <input type="submit" value={btnText}/>
       </form>     
    )
}
