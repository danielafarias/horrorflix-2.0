import styled from "styled-components";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImg: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  background-repeat: no-repeat;

  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);

    .movie-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 2rem;
      height: 80vh;

      h3 {
        margin-bottom: 1rem;
      }

      .movie-buttons {
        display: flex;
        .trailer-btn {
          border: 2px solid var(--text2);
          background-color: var(--text2);

          &:hover {
            color: var(--text2);
          }
        }

        .save-btn {
          border: 2px solid var(--primary);
          background-color: var(--primary);

          &:hover {
            color: var(--primary);
          }
        }

        .save-btn,
        .trailer-btn {
          margin-right: 1rem;
          display: flex;
          align-items: center;
          padding: 0.5rem;
          font-weight: bold;
          color: var(--secondary);
          border-radius: 5px;
          cursor: pointer;
          justify-content: center;
          font-size: 1.5rem;
          max-width: 6rem;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }

  img {
    width: 30rem;
  }

  @media screen and (max-width: 35em) {
    img {
      display: none;
    }
  }
`;
