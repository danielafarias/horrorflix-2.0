import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 1rem 2rem;

    .logo {
        font-family: 'Creepster', cursive;
        font-size: 2.5rem;
        color: var(--primary);
    }

    .list {
        color: var(--text2);
        font-size: 1.2rem;

        &:hover {
            color: var(--text1);
        }
    }
`;