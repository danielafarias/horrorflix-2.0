import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  display: inline-block;

  svg {
    color: var(--primary);
  }

  .tooltiptext {
    visibility: hidden;
    background-color: var(--primary);
    color: var(--secondary);
    text-align: center;
    border-radius: 6px;
    padding: 0.5rem;
    margin-left: 1rem;
    font-weight: bold;
    position: absolute;
    z-index: 1;

    div {
      display: flex;
      svg {
        color: var(--secondary);
        margin-right: 0.5rem;
      }
    }
  }
  &:hover {
    .tooltiptext {
      visibility: visible;
    }
  }
`;
