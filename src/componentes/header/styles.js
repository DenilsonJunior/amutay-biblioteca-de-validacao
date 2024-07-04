import styled from 'styled-components';

export const Cabecalho = styled.header`
    width: 100%;
    background-color: var(--esc);
    /* backdrop-filter: blur(5px); */
    display: flex;
    /* justify-content: flex-end; */
    padding: 1rem;
    position: fixed;
    top: 0;
    z-index: 2;

    .logo {
        height: 6rem;
    }
`