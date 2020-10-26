import styled from "styled-components";

import { FUNDO } from '../../assets/conts';
import Colors from "../../styles/Colors";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => Colors.fundo};

    @media (max-width: 460px) {
        background: ${props => Colors.white};
    }
`;

export const ContainerForm = styled.div`
    width: 30vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => Colors.white};
    box-shadow: 10px 8px 8px #CDCDCD;     

    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;

    @media (max-width: 850px) {
        width: 45vw;
    }

    @media (max-width: 600px) {
        width: 60vw;
        height: 60vh;
        border-radius: 2rem;
    }

    @media (max-width: 460px) {
        width: 100vw;
        box-shadow: none;
    }
`;

export const ContainerImg = styled.div`
    width: 30vw;
    height: 80vh;
    display: flex;
    align-items: center;
    background: ${props => Colors.white};
    box-shadow: 10px 8px 8px #CDCDCD;    

    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;

    @media (max-width: 850px) {
        width: 45vw;    
    }

    @media (max-width: 600px) {
        display: none;
    }
`;


export const ContentForm = styled.div`
    width: 100%;
    padding: 5rem;    
    border-radius: 2rem;    
`;

export const LogoForm = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: flex;
    }
`;

export const Img = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    background-image: url(${FUNDO});
    background-repeat: no-repeat;    

    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
`;