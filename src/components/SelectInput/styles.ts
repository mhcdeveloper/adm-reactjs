import styled from "styled-components";
import Colors from "../../styles/Colors";

interface Props {
    error?: any;
}

export const Container = styled.div<Props>`    
    position: relative;
    width: 100%;
    margin-bottom: 2.8rem;    
    /* border: 1px solid ${props => Colors.black};
    border-radius: 1.2rem; */
`;

export const Label = styled.span`    
    position: absolute;
    top: -1rem;
    left: .9rem;
    padding: 0 .2rem 0 .2rem;
    font-weight: 300;
    color: ${props => Colors.primaryText};
    background: #fff;
    transition: 0.5s;     
    z-index: 10;
`;

export const Error = styled.span`
    position: relative;
    top: .5rem;
    color: ${props => Colors.red};
    padding-left: 1.5rem;
`;