import React from "react";
import styles from "./Modal.module.css"

interface Props {
    children: React.ReactNode
}

export const Modal = ({ children }: Props) => {
  
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.add("hide")
  }

  return (
    <div id="modal">
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>  
            {children}
        </div>
    </div>
  )
}

