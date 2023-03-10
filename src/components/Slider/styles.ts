import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 -1rem 8rem 0;

  h2 {
    font-size: 3rem;
    line-height: 0;
  }

  .slider_button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .slider_arrow_icon {
    border: none;
    padding: 1rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease-in;
    cursor: pointer;
    background-color: transparent;
    color: var(--text2);

    &:hover {
      transition: all 0.3s;
      background-color: var(--text2);
      opacity: 0.1;
      color: var(--secondary);
    }
  }

  .slider_items {
    width: 100%;
    overflow: hidden;
  }

  .slider_item {
    display: grid;
    grid-template-columns: repeat(6, 20.4rem);
    gap: 1rem;
    padding: 4rem 2rem;
    cursor: grab;
  }

  .slider_item::-webkit-scrollbar {
    display: none;
  }

  .slider-card {
    padding: 1rem;
  }

  .slider-card-box {
    transition: all 0.3s ease-in;
    border-radius: 2rem;
    padding-bottom: 1rem;

    &:hover {
      box-shadow: 0 5px 50px black;
    }
  }

  .slider-card-img {
    border-radius: 2rem 2rem 0 0;
    height: 450px;
    max-width: 294px;
    object-fit: cover;
    mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
  }

  .slider-card-title {
    display: flex;
    align-items: center;
    padding-inline: 2rem;
    justify-content: space-between;
    gap: 1rem;
    margin: 1rem 0 1rem;

    p {
      font-size: 1.2rem;
      line-height: 1;
      color: var(--text1);
      font-weight: 800;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .slider-card-actions {
    display: flex;
    justify-content: space-between;
    padding-inline: 2rem;
    line-height: 0;
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: end;

    .info-btn {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        font-weight: bold;
        border: 2px solid var(--text2);
        color: var(--secondary);
        background-color: var(--text2);
        border-radius: 5px;
        cursor: pointer;
        justify-content: center;

        svg {
            color: var(--secondary);
            margin-right: 0.5rem;
        }

        &:hover {
            background-color: transparent;
            color: var(--text2);

            svg {
                color: var(--text2);
            }
        }
    }

    .like-btn {
        border-radius: 9999px;
        border: none;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        cursor: pointer;

        svg {
            color: var(--text2);
        }

        &:hover {
            svg {
                color: var(--primary);
            }
        }
    }
  }

  .slider-card-price-box {
    /* TODO: CHANGE COLOR */
    border: 1px solid red;
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;

    small {
      /* TODO: CHANGE COLOR */
      background-color: red;
      padding: 0.2rem 0.5rem;
      border-radius: 0.2rem;
      color: pink;
    }

    p {
      font-size: 1.3rem;
      font-weight: 700;
      margin-top: 2rem;
      line-height: 0;
    }
  }

  .slider-card-price-time {
    align-items: flex-end;
    display: grid;

    p {
      font-size: 1.3rem;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 35em) {
    .slider_box {
      width: 90%;

      h2 {
        font-size: 2rem;
      }
    }

    .slider_arrow_icon {
      padding: 0.5rem;
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 375px) {
    .slider-card {
      padding: 0.5rem;
    }

    .slider-card-title p {
      font-size: 1rem;
    }

    .slider-card-price-box {
      padding: 0.2rem;
    }

    .slider-card-price-time p {
      font-size: 1rem;
    }
  }
`;
