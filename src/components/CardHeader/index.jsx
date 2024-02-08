import { CardHeaderStyles } from "./styles";

function CardHeader({character}) {
  return (
    <CardHeaderStyles className="card-header"  status={character.status}>
      <div>
        <div className="card-border"></div>
        <h1 className="card-name">{character.name}</h1>
      </div>
      {/* <h3 className="card-description">Scientist, inventor, and alcoholic</h3> */}
    </CardHeaderStyles>
  );
}

export default CardHeader;
