import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    background: ${props => Colors.white};
    z-index: 100;
`;

export const Content = styled.div`
    width: 60%;
    padding: 5rem;    
    
    border-radius: 2rem; 
    box-shadow: .2rem .2rem .30rem rgba(0, 0, 0, 0.2);
    background: ${props => Colors.white};

    @media (max-width: 550px) {
        width: 100%;
    }
`;