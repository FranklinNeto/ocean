import styled from "styled-components";

export const CardStyles = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--cor-primaria);

  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 4px 4px white;

  padding: 1.8rem 0.5rem;
  gap: 4px;

  height: 24rem;
  //width: 18.75rem;

  cursor: pointer;

  img {
    border-radius: 12px;
    width: 12rem;
    margin-bottom: 8px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #ffff;

    /* background-color: red; */ //para teste

    width: 100%;
    height: 40%;

    margin-bottom: 8px;

    .div-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 18px;
      max-width: 300px;
      //background-color: yellow; // teste
    }
  }
`;
