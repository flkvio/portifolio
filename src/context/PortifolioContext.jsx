import { createContext, useEffect, useState } from "react";

export const PortifolioContext = createContext({});

export const PortifolioProvider = ({ children }) => {
  const GET_LAST_PAGE = localStorage.getItem("last_page");
  const GET_PREFER_DARK_MODE = JSON.parse(
    localStorage.getItem("prefer_dark_mode")
  );

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
      }}
    >
      {children}
    </PortifolioContext.Provider>
  );
};
