import styled from 'styled-components';

export const CardItem = styled.div`
    a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        .card {
            background-color: #0005;
            width: 35rem;
            height: auto;
            padding: 2rem 1rem;
            position: relative;
            display: block;
            border-radius: .5rem;
            overflow: hidden;
            .pn {
                background-color: #000;
                position: absolute;
                top: 1rem;
                left: 0;
                width: 150px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0 .5rem .5rem 0;
                h2 {
                    margin: 0;
                }
            }
            img {
                width: 100%;
                height: 300px;
                background-color: #0005;
            }
            .title {
                /* background-color: #0005; */
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                h3 {
                    margin: 0;
                    text-align: center;
                }
            }
        }
    }
`;
