import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`    
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
        padding: 1.2rem;
        margin: 0.5rem;

        border-radius: 1.2rem;
        border-color: ${props => Colors.transparent};
        box-shadow: .2rem .2rem .30rem rgba(0, 0, 0, 0.4);

        :focus {
            outline: none !important;
        }
    }    
`;