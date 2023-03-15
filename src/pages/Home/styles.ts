import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .paginate-button {
    position: fixed;
    bottom: 0;
    right: 0;
  }

  .top-button {
    position: fixed;
    bottom: 0;
    right: 4rem;
  }

  .paginate-button, .top-button {
    font-weight: bold;
    background-color: transparent;
    font-size: 1.5rem;
    border: none;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 99999px;
    cursor: pointer;
    opacity: 0.3;

    svg {
      color: var(--primary);
    }

    &:hover {
      opacity: 1;
    }
  }
`;
