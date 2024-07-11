import styled from 'styled-components';

export const Cabecalho = styled.header`
    width: 100%;
    /* background-color: var(--esc); */
    /* backdrop-filter: blur(5px); */
    display: flex;
    /* justify-content: flex-end; */
    padding: 1rem 5%;
    /* position: absolute; */
    top: 0;
    z-index: 2;
    margin-bottom: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
        height: 8rem;
        filter: drop-shadow(0.2rem 0.2rem 0.3rem #0008);
        @media (max-width: 650px) {
            height: 10rem;
        }
    }

    h1 {
        margin: 0 0 0 1rem;
        color: white;
        text-shadow: 0.3rem 0.3rem 0.5rem #0008;
        letter-spacing: .3rem;
        text-transform: uppercase;
        @media (max-width: 650px) {
            font-size: 2rem;
        }
    }
`