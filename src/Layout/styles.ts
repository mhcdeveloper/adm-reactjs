import styled from "styled-components";

import Colors from "../styles/Colors";

export const Container = styled.div`   
    width: 100vw;
    height: 100vh;
    background: ${props => Colors.fundo};

`;

export const Wrapper  = styled.div`
    height: 100%;
    max-width: 1280px;
    /* margin: 0 auto; */
    
    display: flex;
    flex-direction: row;

    background: ${props => Colors.white};
`;
