import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PortifolioContext = createContext({});

export const PortifolioProvider = ({ children }) => {
  //Variáveis
  const GET_LAST_PAGE = localStorage.getItem("last_page");
  const GET_PREFER_DARK_MODE = JSON.parse(
    localStorage.getItem("prefer_dark_mode")
  );

  //Estados
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    GET_LAST_PAGE ? GET_LAST_PAGE : "/inicio"
  );

  const changePage = (pathName) => {
    localStorage.setItem("last_page", pathName);
    setCurrentPage(pathName);
  };

  const [darkMode, setDarkMode] = useState(GET_PREFER_DARK_MODE);

  useEffect(() => {
    if (GET_PREFER_DARK_MODE) {
      document.querySelector("html").classList.add("dark-mode");
    }
    const getRepos = async () => {
      const repoLang = { project: null, languages: null };
      try {
        const response = await axios({
          method: "get",
          url: "https://api.github.com/users/flkvio/repos",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "",
          },
        });
        const data = await response.data;
        const orderedData = data
          .sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return dateA - dateB;
          })
          .reverse();

        repoLang.project = data;
        setProjects(orderedData);
        setFilteredProjects(orderedData);
      } catch (error) {
        console.log("Erro", error);
      }
    };
    getRepos();
  }, [GET_PREFER_DARK_MODE]);

  const handleDarkMode = () => {
    localStorage.setItem("prefer_dark_mode", !darkMode);
    setDarkMode(!darkMode);
    document.querySelector("html").classList.toggle("dark-mode");
  };

  return (
    <PortifolioContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        darkMode,
        setDarkMode,
        handleDarkMode,
        changePage,
        projects,
        filteredProjects,
        setFilteredProjects,
      }}
    >
      {children}
    </PortifolioContext.Provider>
  );
};
