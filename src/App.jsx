import { useState, useEffect } from "react";
import GridCards from "./components/GridCards";
import Global from "./styles/global";

import api from "./services/api";

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    carregarDadosdeAPI();
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("Está visível");
        setCurrentPage((prev) => prev + 1);
        console.log(currentPage);
      }

      //console.log("Estamos obsevando", entries);

      return intersectionObserver;
    });

    intersectionObserver.observe(document.getElementById("sentinela"));

    return () => intersectionObserver.disconnect();
  }, []);

  async function carregarDadosdeAPI() {
    try {
      const response = await api.get(`/character?page=${currentPage}`);
      const requestedCharacters = await response.data.results;
      setCharacters([...characters, ...requestedCharacters]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Global />
      <GridCards characters={characters} />
    </>
  );
}

export default App;
