import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css"

import { ITask } from './interfaces/task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const delTask = (id: number) => {
    setTaskList(
      taskList.filter((value) =>  value.id !== id
    )
    )
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDel={delTask}/>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
