import styled from "styled-components";
import Colors from "../../styles/Colors";

interface Props {
    size: string;
    color?: string;
}

export const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    font-size: ${props => props.size ? props.size : '2.2rem'};
    color: ${props => props.color ? props.color : Colors.primary};  
`;