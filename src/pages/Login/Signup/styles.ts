import styled from "styled-components";

import Colors from "../../../styles/Colors";

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
    width: 35vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => Colors.white};
    box-shadow: 10px 8px 8px #CDCDCD;     

    border-radius: 2rem;
    
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

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5rem;    
    border-radius: 2rem;    
`;

export const LogoForm = styled.div`
    display: flex; 
`;

export const BackBtn = styled.div`
    display: flex;
    padding-left: 4rem;
`;