import Card from "../Card";
import { GridCardsStyle } from "./styles";

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
