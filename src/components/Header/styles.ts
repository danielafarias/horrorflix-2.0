import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 1rem 2rem;

    .logo {
        font-family: 'Creepster', cursive;
        text-decoration: none;
        font-size: 2.5rem;
        color: var(--primary);
    }

    .list {
        color: var(--text2);
        text-decoration: none;
        font-size: 1.2rem;

        &:hover {
            color: var(--text1);
        }
    }
`;