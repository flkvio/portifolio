import React, { useContext } from "react";
import { PortifolioContext } from "../../context/PortifolioContext";
import { Projetos } from "../Projetos/Projetos";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import style from "./Main.module.css";

export const Main = () => {
  const { currentPage } = useContext(PortifolioContext);

  const renderContent = () => {
    switch (currentPage) {
      case "/inicio":
        return <Home />;
      case "/projetos":
        return (
          <div className="main-container">
            <Projetos />
          </div>
        );
      case "/contato":
        return (
          <div className="main-container">
            <Contact />
          </div>
        );
      default:
        return (
          <div className="main-container">
            <Home />
          </div>
        );
    }
  };

  return <main className={style.Main}>{renderContent()}</main>;
};
