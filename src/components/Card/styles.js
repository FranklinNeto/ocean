import styled from "styled-components";

export const CardStyles = styled.div`
  
  
  
  
  
  display: flex;
  flex-direction: column;
  background-color: black;

  border: solid white 3px;
  border-radius: 8px;
  /* box-shadow: 14px 11px 14px -2px rgba(28, 22, 28, 1); */

  padding: 10px;

  img {
    border-radius: 9px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #ffff;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
  }
`;
