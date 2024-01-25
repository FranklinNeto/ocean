export function moveCard(event) {
    const card = document.querySelector(".card-content");
    const boundingRect = event.currentTarget.getBoundingClientRect();
  
    const mouseX = (event.clientX - boundingRect.left) / boundingRect.width - 0.5;
    const mouseY = 0.5 - (event.clientY - boundingRect.top) / boundingRect.height;
  
    card.style.transform = `
          rotateX(${mouseY * 40}deg)
          rotateY(${mouseX * 40}deg)
        `;
  }

  