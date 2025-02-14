import React, { useContext } from "react";
import { PortifolioContext } from "../../context/PortifolioContext";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import { } from "./style.css";

export const Main = () => {
   const {currentPage} = useContext(PortifolioContext);  


  const renderContent = () => {
    switch (currentPage) {
      case "/inicio":
        return (
          <div className="main-container home">
            <Home />
          </div>
        );
      case "/projetos":
        return (
          <div className="main-container">
            <h2>Projetos</h2>
          </div>
        );
      default:
        return (
          <div className="main-container">
            <Contact />
          </div>
        );
    }
  };

  return <main className="main">{renderContent()}</main>;
};
