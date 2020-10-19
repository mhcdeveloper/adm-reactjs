import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: Roboto, sans-serif;
    }    
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;
    }

    //media queries
    @media (max-width: 768px) {
        html {
            font-size: 50%;
        }
    }

    @media (max-width: 630px) {
        html {
            font-size: 50%;
        }
    }

    a {
        text-decoration: none;
    }

    .isActivedLink {
        width: 100%;
        display: flex;
        list-style: none;

        margin: 0.05rem;                
    }
`;