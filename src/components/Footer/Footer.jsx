import React from "react";
import style from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={style.Footer}>
      <div className={style.container}>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
