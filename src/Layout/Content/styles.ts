import styled from "styled-components";

import Colors from "../../styles/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 95vh;    

    background: ${props => Colors.white};
    border-top-right-radius: 2.8rem;
    border-bottom-right-radius: 2.8rem;
    box-shadow: 5px 5px 5px #c9c9c9;    

    @media (max-width: 800px) {
        width: 90%;
        height: 100vh;

        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const Main = styled.div`
    width: 100%;
    margin: 0.2rem auto;
    padding: 1.6rem;

    overflow-y: auto;
    -ms-overflow-style: none; 
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;