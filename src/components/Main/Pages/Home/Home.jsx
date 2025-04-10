import React from "react";
import cssIcon from "../../../../assets/css3-alt-brands-solid.svg";
import htmlIcon from "../../../../assets/html5-brands-solid.svg";
import sonic from "../../../../assets/image.png";
import jsIcon from "../../../../assets/js-brands-solid.svg";
import reactIcon from "../../../../assets/react-brands-solid.svg";
import {} from "./style.css";
import { ProjectCardAlt } from "../../../ProjectCardAlt/ProjectCardAlt";
import fccTributePage from "../../../../assets/fcc-tribute-page.png"


export const Home = () => {
  return (
    <>
      <div className="main-container home">
        <article className="info-page">
          <img
            onContextMenu={(event) => {
              event.preventDefault();
            }}
            className="info-picture"
            draggable="false"
            src={sonic}
            alt=""
          />
          <section className="info-container">
            <div className="info-text">
              <h2>Olá, mundo! </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                iste voluptatibus provident modi nesciunt eum architecto
                voluptates neque, corporis minima officia minus facere
                praesentium quos reiciendis labore maxime et beatae.
              </p>
            </div>
            <div className="info-stack">
              <img
                title="HTML"
                className="stack-icon"
                src={htmlIcon}
                alt="HTML"
              />
              <img title="CSS" className="stack-icon" src={cssIcon} alt="CSS" />
              <img
                title="Javascript"
                className="stack-icon"
                src={jsIcon}
                alt="Javascript"
              />
              <img
                title="React"
                className="stack-icon"
                src={reactIcon}
                alt="React"
              />
            </div>
          </section>
        </article>
      </div>
      <div className="alt-card-container">
        <ProjectCardAlt
          title="freeCodeCamp tribute page"
          description="Esse é o segundo dos cinco projetos necessários para concluir a certificação de Responsive Web Design do freeCodeCamp."
          image={fccTributePage}
          page="https://flkvio.github.io/fcc-tribute-page/"
          repo="https://github.com/flkvio/fcc-tribute-page"
        />
        <ProjectCardAlt
          title="Teste"
          description="teste"
          image="https://picsum.photos/200/300"
        />
        <ProjectCardAlt
          title="Teste"
          description="teste"
          image="https://picsum.photos/200/300"
        />
      </div>
    </>
  );
};
