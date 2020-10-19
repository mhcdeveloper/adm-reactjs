import styled from "styled-components";

import Colors from "../styles/Colors";

export const Container = styled.div`   
    width: 100vw;
    height: 100vh;
    background: ${props => Colors.fundo};

    display: flex;
    align-items: center;
`;

export const Wrapper  = styled.div`
    width: 1280px;    
    max-width: 1280px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: row;        

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;
