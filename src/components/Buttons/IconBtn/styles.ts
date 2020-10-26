import styled from "styled-components";
import Colors from "../../../styles/Colors";

interface Props {
    background: string;
}

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: .8rem;
    background: ${props => props.background ? props.background : Colors.primary};
    border-radius: 1.2rem;

    :hover {
        cursor: pointer;
        opacity: 0.6;

        transform: translate(2px, 1px);
    }
    
`;