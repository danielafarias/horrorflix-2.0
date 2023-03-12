import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;

    h2 {
        color: var(--text2);
    }
`;

export const EmptyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    height: 80vh;
    color: var(--text2);

    img {
        margin-top: 1rem;
    }
`;