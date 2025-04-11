import React from "react";
import { Navbar } from "../Navbar/Navbar.jsx";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Flávio</h1>
        <Navbar />
      </div>
    </header>
  );
}
