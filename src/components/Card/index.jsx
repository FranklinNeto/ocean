import { CardStyles } from "./styles";

import { useState } from "react";

import { TagStyled } from "../Tag/styles";
import CardHeader from "../CardHeader";

/* import PropTypes from "prop-types";
 */
function Card({ character }) {
  // const [transformStyle, setTransformStyle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const moveCard = (event) => {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    if (isHovered) {
      const boundingRect = event.currentTarget.getBoundingClientRect();
      const mouseX = (clientX - boundingRect.left) / boundingRect.width - 0.5;
      const mouseY = 0.5 - (clientY - boundingRect.top) / boundingRect.height;

      event.currentTarget.style.transform = `
        perspective(1000px)
        rotateX(${mouseY * 30}deg)
        rotateY(${mouseX * 30}deg)
        translateZ(20px)
        scale(1.2)
      `;
    }
  };

  const resetCard = (event) => {
    event.currentTarget.style.transform = "";
    setIsHovered(false);
  };

  return (
    <CardStyles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetCard}
      onMouseMove={moveCard}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={resetCard}
      onTouchMove={moveCard}
      style={{ transform: "transform 0.3s cubic-bezier(.17,.67,.83,.67)" }}
      className="card"
    >
      <div className="card-content">
        <CardHeader character={character} />

        <div className="div-tags">
          <TagStyled>Status: {character.status}</TagStyled>
          <TagStyled>Species: {character.species}</TagStyled>
          <TagStyled>Origin: {character.origin.name}</TagStyled>
        </div>
      </div>

      <figure>
        <img src={character.image} alt={`Imagem de ${character.name}`} />
      </figure>
    </CardStyles>
  );
}

/* Card.propTypes = {
  
  character: PropTypes.
  image: PropTypes.string.isRequired, // Certifique-se de ajustar o tipo conforme necessário
  outrasProps: PropTypes.any,
  // Adicione outras propriedades, se houver
}; */

export default Card;
