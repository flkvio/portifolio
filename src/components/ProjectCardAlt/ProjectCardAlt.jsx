import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
// import "./styles.css";
import style from "./ProjectCardAlt.module.css";

export const ProjectCardAlt = ({ title, image, description, page, repo }) => {
  return (
    <article className={style.ProjectCardAlt}>
      <h2 className="project-card-alt-title">{title}</h2>
      <img className="project-card-alt-image" src={image} alt={description} />
      <span className="project-card-alt-description">{description}</span>
      <div className="project-card-alt-buttons-container">
        {page ? (
          <button
            onClick={() => {
              window.open(page);
            }}
          >
            <FaExternalLinkAlt />
            Página
          </button>
        ) : null}

        <button
          onClick={() => {
            window.open(repo);
          }}
        >
          <FaGithubAlt /> Repositório
        </button>
      </div>
    </article>
  );
};
