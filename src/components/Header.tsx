import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1><span>R</span>eact<span>T</span>ype List</h1>
    </header>
  )
};