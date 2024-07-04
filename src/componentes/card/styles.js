import styled from 'styled-components';

export const CardItem = styled.div`
    a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        /* filter: grayscale(.2); */
        filter: contrast(90%);
        transition-duration: .3s;
        &:hover {
            filter: contrast(110%);
            .card {
                .title {
                    transition-duration: .3s;
                    bottom: 0;
                }
            }
        }
        .card {
            background-color: rgba(255, 255, 255, .9);
            width: 100%;
            height: auto;
            /* padding: 2rem 1rem; */
            box-shadow: 0.3rem 0.3rem 1rem #0002;
            border-radius: .3rem;
            position: relative;
            display: block;
            overflow: hidden;
            .pn {
                background-color: #000;
                position: absolute;
                top: 1rem;
                left: 0;
                width: 15rem;
                height: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0 .5rem .5rem 0;
                display: none;
                h2 {
                    color: white;
                    margin: 0;
                }
            }
            img {
                width: 100%;
                height: auto;
                /* background-color: #0005; */
            }
            .title {
                background-color: #0009;
                backdrop-filter: blur(5px);
                margin: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: .5rem;
                position: absolute;
                bottom: -5rem;
                p {
                    color: white;
                    margin: 0;
                    /* background-color: #0005; */
                }
            }
        }
    }
`;
