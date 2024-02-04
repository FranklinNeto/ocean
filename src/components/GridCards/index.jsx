import { useEffect, useState } from "react";
import Card from "../Card";
import { GridCardsStyle } from "./styles";

//import api from "../../services/api";

// eslint-disable-next-line react/prop-types
function GridCards({ characters }) {
  

 

  return (
    <GridCardsStyle>
      <ul>
        {characters.map((character) => (
          <Card key={character.id} character={character}></Card>
        ))}

        <li id="sentinela"></li>
      </ul>
    </GridCardsStyle>
  );
}

export default GridCards;
