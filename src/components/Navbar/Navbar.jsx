import { React, useContext } from "react";
import moon from "../../assets/moon-solid.svg";
import sun from "../../assets/sun-solid.svg";
import { PortifolioContext } from "../../context/PortifolioContext";
import style from "./Navbar.module.css";

export function Navbar() {
  const { changePage, handleDarkMode, darkMode } =
    useContext(PortifolioContext);

  const handleClick = (event) => {
    changePage(`/${event.target.id}`);
  };

  return (
    <nav className={style.Navbar}>
      <ul>
        <li id="inicio" onClick={handleClick}>
          Início
        </li>
        <li id="projetos" onClick={handleClick}>
          Projetos
        </li>
        <li id="contato" onClick={handleClick}>
          Contato
        </li>
        <li>
          <img
            src={darkMode ? sun : moon}
            alt={darkMode ? "Icone de Sol" : "Icone de Lua"}
            onClick={() => {
              handleDarkMode();
            }}
          />
        </li>
      </ul>
    </nav>
  );
}
