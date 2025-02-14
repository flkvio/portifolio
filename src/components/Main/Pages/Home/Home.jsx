import React from "react";
import {} from "./style.css";
import sonic from "../../../../assets/image.png";
import htmlIcon from "../../../../assets/html5-brands-solid.svg";
import cssIcon from "../../../../assets/css3-alt-brands-solid.svg";
import jsIcon from "../../../../assets/js-brands-solid.svg";
import reactIcon from "../../../../assets/react-brands-solid.svg";

export const Home = () => {
  return (
    <>
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
              voluptates neque, corporis minima officia minus facere praesentium
              quos reiciendis labore maxime et beatae.
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
    </>
  );
};
