import { React, useContext } from "react";
import moon from "../../assets/moon-solid.svg";
import sun from "../../assets/sun-solid.svg";
import { PortifolioContext } from "../../context/PortifolioContext";
import {} from "./style.css";

export function Navbar() {
  const { changePage, handleDarkMode, darkMode } =
    useContext(PortifolioContext);

  const handleClick = (event) => {
    changePage(`/${event.target.id}`);
  };

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item" id="inicio" onClick={handleClick}>
          Início
        </li>
        <li className="nav-item" id="projetos" onClick={handleClick}>
          Projetos
        </li>
        <li className="nav-item" id="contato" onClick={handleClick}>
          Contato
        </li>
        <li className="nav-item-icon">
          <img
            className="nav-icon"
            src={darkMode ? sun : moon}
            alt="a"
            onClick={() => {
              handleDarkMode();
            }}
          />
        </li>
      </ul>
    </nav>
  );
}
