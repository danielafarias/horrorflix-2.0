import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    .slider_box {
        width: 80%;
        margin: 0 auto;
        padding: 0 -1rem 8rem 0;

        h2 {
            font-size: 3rem;
            line-height: 0;
        }
    }

    .slider_button {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .slider_arrow {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 2rem;
    }

    .slider_arrow_icon {
        /* TODO: CHANGE COLOR */
        border: 1px solid black;
        padding: 1rem;
        display: flex;
        align-items: center;
        border-radius: 50%;
        transition: all .3s ease-in;
        cursor: pointer;

        &:hover {
             /* TODO: CHANGE COLOR */
            background-color: red;
            color: white;
            box-shadow: 0 1px 2px black;
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
        transition: all .3s ease-in;
        border-radius: 2rem;
        padding-bottom: 1rem;

        &:hover {
            box-shadow: 0 1px 2px black;
        }
    }

    .slider-card-img {
        border-radius: 2rem;
        height: 450px;
        max-width: 300px;
        object-fit: cover;
        mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    }

    .slider-card-title {
        display: flex;
        align-items: center;
        padding-inline: 2rem;
        justify-content: space-between;
        gap: 1rem;

        p {
            font-size: 1.2rem;
            line-height: .5;
            font-weight: 800;
        }
    }

    .slider-card-actions {
        display: flex;
        justify-content: space-between;
        padding-inline: 2rem;
        line-height: 0;
        margin-top: 1rem;
        text-align: end;
    }

    .slider-card-price-box {
         /* TODO: CHANGE COLOR */
        border: 1px solid red;
        padding: .2rem 1rem;
        border-radius: .2rem;

        small {
             /* TODO: CHANGE COLOR */
            background-color: red;
            padding: .2rem .5rem;
            border-radius: .2rem;
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

        .slider_item {
            overflow: auto;
            grid-template-columns: repeat(6, 95%);
            padding: 4rem 0;
        }

        .slider_arrow_icon {
            padding: .5rem;
        }
    }

    @media screen and (min-device-width: 320px) and (max-device-width: 375px) {
        .slider-card {
            padding: .5rem;
        }

        .slider-card-title p {
            font-size: 1rem;
        }

        .slider-card-price-box {
            padding: .2rem;
        }

        .slider-card-price-time p {
            font-size: 1rem;
        }
    }
`;