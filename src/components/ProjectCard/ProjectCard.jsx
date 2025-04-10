import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import "./styles.css"
export const ProjectCard = ({ project }) => {
  return (
    <article className="project-card" key={project.id}>
      <span className="project-date">
        {String(project.created_at)
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/")}
      </span>
      <span></span>
      <h3 className="project-title">
        <a href={project.homepage} target="_blank" rel="noreferrer">
          {project.name ? project.name : "Undefined"}
        </a>
      </h3>
      <span className="project-description">
        {project.description ? project.description : "Description"}
      </span>
      <div className="buttons-topics-container">
        <div className="project-buttons-container">
          {project.homepage ? (
            <button
              className="project-button"
              onClick={() => {
                window.open(project.homepage);
              }}
            >
              <FaExternalLinkAlt />
              Página
            </button>
          ) : null}
          <button
            className="project-button"
            onClick={() => {
              window.open(project.html_url);
            }}
          >
            <FaGithubAlt /> Repositório
          </button>
        </div>
        <div className="project-topics">
          {project.topics
            ? project.topics.map((topic, index) => {
                if (
                  topic === "react" ||
                  topic === "javascript" ||
                  topic === "typescript" ||
                  topic === "html" ||
                  topic === "css"
                ) {
                  return (
                    <span key={`${project.id}-${topic}-${index}`}>{topic}</span>
                  );
                }
                return null;
              })
            : null}
        </div>
      </div>
    </article>
  );
};
