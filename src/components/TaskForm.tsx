import React from "react";
import styles from "./TaskForm.module.css"

interface Props {
    btnText: string
}

export const TaskForm = ({btnText}: Props) => {
    return(
       <form className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa"/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="level">Dificuldade:</label>
                <input type="text" name="level" placeholder="Dificuldade da tarefa"/>
            </div>
            <input type="submit" value={btnText}/>
       </form>     
    )
}
