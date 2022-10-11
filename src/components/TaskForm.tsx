import React from "react";

interface Props {
    btnText: string
}

export const TaskForm = ({btnText}: Props) => {
    return(
       <form>
            <div>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa"/>
            </div>
            <div>
                <label htmlFor="level">Dificuldade:</label>
                <input type="text" name="level" placeholder="Dificuldade da tarefa"/>
            </div>
            <input type="submit" value={btnText}/>
       </form>     
    )
}
