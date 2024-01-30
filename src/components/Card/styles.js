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

  padding: 1.8rem 0.5rem;
  gap: 4px;

  height: 24rem;

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
