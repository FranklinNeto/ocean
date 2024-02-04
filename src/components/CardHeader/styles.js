import styled, { css } from "styled-components";

export const CardHeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
  gap: 0.6rem;
  // background-color: orange;

  width: 75%;
  height: 20%;

  div {
    display: flex;
    width: 100%;
    height: 2rem;
    gap: 2.5rem;

    // background-color: red;

    justify-content: flex-start;
    align-items: center;

    .card-border {
      background-color: var(--cor-terciaria);
      width: 8px;
      border-radius: 12px;
      height: 2rem;

      ${(props) =>
        props.status === "Alive"
          ? css`
              background-color: var(--cor-vivo);
            `
          : css`
              background-color: var(--cor-morto);
            `};
    }

    h1 {
      font-size: 24px;

      width: 70%;

      text-align: center;
    }
  }

  h3 {
    font-size: 16px;
  }
`;
