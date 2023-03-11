import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    p {
      font-family: "Creepster", cursive;
      font-size: 3rem;
      color: var(--text1);
    }

    .error-btn {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      font-weight: bold;
      border: 2px solid var(--primary);
      color: var(--secondary);
      background-color: var(--primary);
      border-radius: 5px;
      cursor: pointer;
      justify-content: center;
      font-size: 2rem;

      &:hover {
        background-color: transparent;
        color: var(--primary);
      }
    }
  }

  @media screen and (max-width: 35em) {
    img {
        display: none;    
    }

    p {
        text-align: center;
    }
  }
`;
