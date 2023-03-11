import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;

  img {
    padding: 1rem;
  }

  p {
    font-family: "Eater", cursive;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.3);
  }

  p:before {
    content: attr(data-text);
    position: absolute;
    overflow: hidden;
    max-width: 7em;
    white-space: nowrap;
    color: #d4d6d4;
    animation: loading 8s linear;
  }

  @keyframes loading {
    0% {
      max-width: 0;
    }
  }

  @media screen and (max-width: 35em) {
    p {
      font-size: 2rem;
    }
  }
`;
