import { CardHeaderStyles } from "./styles";

function CardHeader() {
  return (
    <CardHeaderStyles className="card-header">
      <h1 className="card-name">Rick Sanchez</h1>
      <h3 className="card-description">Scientist, inventor, and alcoholic</h3>
    </CardHeaderStyles>
  );
}

export default CardHeader;
