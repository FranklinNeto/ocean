import { CardStyles } from "./styles";

import { useState } from "react";

function Card() {
  const [transformStyle, setTransformStyle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const moveCard = (event) => {
    if (isHovered) {
      const boundingRect = event.currentTarget.getBoundingClientRect();
      const mouseX =
        (event.clientX - boundingRect.left) / boundingRect.width - 0.5;
      const mouseY =
        0.5 - (event.clientY - boundingRect.top) / boundingRect.height;

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
      onMouseLeave={() => resetCard()}
      onMouseMove={(e) => moveCard(e)}
      style={{ transform: transformStyle }}
    >
      <div className="card-content">
        <h2>Rick Sanchez</h2>
        
        <span>Scientist, inventor, and alcoholic</span>

        <div className="div-spans">
          <span>Status: Alive</span>
          <span>Location: Earth (C-137)</span>
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
