import { useContext } from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { PortifolioContext } from "../../context/PortifolioContext";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./style.css";

export const Projetos = () => {
  const { projects, filteredProjects, setFilteredProjects } =
    useContext(PortifolioContext);

  const handleClickOnFilterButton = (event) => {
    console.log(event.target.id);
    if (!event.target.id) {
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(
      projects.filter((project) => {
        if (project.topics.includes(event.target.id)) return project;
        return null;
      })
    );
  };

  return (
    <section className="project-container">
      <h2>Projetos!</h2>
      <div className="filter-buttons-container">
        <button onClick={handleClickOnFilterButton}>Mostrar todos</button>
        <button id="react" onClick={handleClickOnFilterButton}>
          <FaReact /> React
        </button>
        <button id="javascript" onClick={handleClickOnFilterButton}>
          <FaJs /> Javascript
        </button>
        <button id="html" onClick={handleClickOnFilterButton}>
          <FaHtml5 /> HTML
        </button>
        <button id="css" onClick={handleClickOnFilterButton}>
          <FaCss3 /> CSS
        </button>
      </div>
      {filteredProjects.map((project) => {
        return <ProjectCard project={project} key={project.id} />;
      })}
    </section>
  );
};
