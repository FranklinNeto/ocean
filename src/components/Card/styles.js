import styled from "styled-components";

export const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  border: solid #0b60b0 8px;
  border-radius: 12px;
  box-shadow: 36px 10px 13px -11px rgba(0, 0, 0, 1);

  padding: 40px 100px;
  gap: 15px;

  img {
    border-radius: 12px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #ffff;

/*     background-color: red; //para teste
 */
    max-width: 100%;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }

    .div-spans {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2px;
      width: 100%;
     /*  background-color: yellow;*/ // teste
    } 
  }
`;
