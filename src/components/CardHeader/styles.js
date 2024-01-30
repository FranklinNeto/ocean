import styled from "styled-components";

export const CardHeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
  gap: 0.6rem;
  //background-color: purple;

  width: 100%;
  height: 15%;

  h1 {
    font-size: 24px;

    border-left: 6px solid #a9d3e9;
    border-radius: 12px;

    width: 70%;

    text-align: center;
  }

  h3 {
    font-size: 16px;
  }
`;
