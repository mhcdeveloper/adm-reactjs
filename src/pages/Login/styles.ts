import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;

    border-radius: 2rem;

    background: ${props => Colors.primary};

    @media (max-width: 360px) {
        width: 100vw;
        height: 100vh;

        justify-content: center;

        border-radius: 0;
    }
`;