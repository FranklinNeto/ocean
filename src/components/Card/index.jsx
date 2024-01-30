import { CardStyles } from "./styles";

import { useState } from "react";

import { TagStyled } from "../Tag/styles";
import CardHeader from "../CardHeader";

function Card() {
  const [transformStyle, setTransformStyle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const moveCard = (event) => {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    if (isHovered) {
      const boundingRect = event.currentTarget.getBoundingClientRect();
      const mouseX = (clientX - boundingRect.left) / boundingRect.width - 0.5;
      const mouseY = 0.5 - (clientY - boundingRect.top) / boundingRect.height;

      setTransformStyle(`
        perspective(1000px)
        rotateX(${mouseY * 25}deg)
        rotateY(${mouseX * 25}deg)
        translateZ(20px)
      `);
    } else {
      setTransformStyle("");
    }
  };

  const resetCard = () => {
    setTransformStyle("");
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
      style={{ transform: transformStyle }}
      className="card"
    >
      <div className="card-content">
        <CardHeader />

        <div className="div-tags">
          <TagStyled>Status: Alive</TagStyled>
          <TagStyled>Espécie: Humana</TagStyled>
          <TagStyled>Origem: Earth (C-137)</TagStyled>
        </div>
      </div>

      <figure>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
        />
      </figure>
    </CardStyles>
  );
}

export default Card;
