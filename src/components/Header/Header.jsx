import React from "react";
import { Navbar } from "../Navbar/Navbar.jsx";
import {} from "./style.css";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="title">Flávio</h1>
        <Navbar />
      </div>
    </header>
  );
}
