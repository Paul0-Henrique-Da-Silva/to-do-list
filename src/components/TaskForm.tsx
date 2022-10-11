import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import styles from "./TaskForm.module.css"

import { ITask } from "../interfaces/task"

interface Props {
    btnText: string
}

export const TaskForm = ({btnText}: Props) => {
    
    const [id, setId] = useState<number>(0)
    const [text, setText] = useState<string>("")
    const [level, setLevel] = useState<number>(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") 
            { setText(e.target.value)}
        else { setLevel(parseInt(e.target.value))}    
    }

    const addTaskHandle = () => {
     
    }

    return(
       <form onSubmit={addTaskHandle} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" 
                placeholder="Título da tarefa" onChange={handleChange}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="level">Dificuldade:</label>
                <input type="text" name="level" 
                placeholder="Dificuldade da tarefa" onChange={handleChange}/>
            </div>
            <input type="submit" value={btnText}/>
       </form>     
    )
}
