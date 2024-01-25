import styled from "styled-components";

export const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;

  border: solid #0b60b0 4px;
  border-radius: 8px;
  box-shadow: 36px 10px 13px -11px rgba(0, 0, 0, 1);

  padding: 30px;
  gap: 15px;

  img {
    border-radius: 8px;
  }

  span {
    background-color: #0b60b0;
    padding: 8px 6px;
    border-radius: 8px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: #ffff;

    max-width: 100%;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }

    .div-spans {
      display: flex;
      justify-content: space-between;
      width: 100%;

      span {
        background-color: #0b60b0;
        padding: 8px 6px;
        border-radius: 8px;
      }
    }
  }
`;
