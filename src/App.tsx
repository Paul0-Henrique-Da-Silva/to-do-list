import React, { useState } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Modal } from './components/Modal';

import styles from "./App.module.css"

import { ITask } from './interfaces/task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const delTask = (id: number) => {
    setTaskList(
      taskList.filter((value) =>  value.id !== id
    )
    )
  }

  const showModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
      if(display) {
        modal!.classList.remove("hide")
      } else {
        modal!.classList.add("hide") 
      }
  }

  const editTask = (task: ITask): void => {
    showModal(true)
    setTaskToUpdate(task)
  }


  const updateTask = (id: number, title: string, level: number) => {
    const updateTask: ITask = {id, title, level}
    const updateItem = taskList.map((value) => {
        return value.id === updateTask.id ? updateTask : value
    })

    setTaskList(updateItem)
    showModal(false);
    
}

  return (
    <>
      <Modal children={
        <TaskForm 
          btnText="Editar Tarefa" 
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
          />}
        />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa" 
            taskList={taskList} 
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
            taskList={taskList} 
            handleDel={delTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
