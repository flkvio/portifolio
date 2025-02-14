import { React } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { PortifolioProvider } from "./context/PortifolioContext";
import "./index.css";

function App() {
  return (
    <PortifolioProvider >
      <Header />
      <Main />
      <Footer />
    </PortifolioProvider>
  );
}

export default App;
