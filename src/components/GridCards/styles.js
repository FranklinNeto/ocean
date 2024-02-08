import styled from "styled-components";

export const GridCardsStyle = styled.div`
  width: 90%;

  margin-top: 4rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(304px, auto));
    width: 100%;
  }
`;
