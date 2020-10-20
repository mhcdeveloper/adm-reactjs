import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

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
    @media (max-width: 975px) {
        html {
            font-size: 50%;
        }
    }

    @media (max-width: 630px) {
        html {
            font-size: 50%;
        }

        .link-actived {
            margin-left: 0;
            
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }

    a {
        text-decoration: none;
    }

    .link-actived {
        background: ${props => Colors.white};        
        margin-left: 0.5rem;
        
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;   
    }

    .link-actived span {
        color: ${props => Colors.darkPrimary};
        font-weight: 400;
    }

    .link-actived i {
        color: ${props => Colors.darkPrimary};
    }
`;