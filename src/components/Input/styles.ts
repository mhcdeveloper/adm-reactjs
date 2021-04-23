import styled from "styled-components";
import Colors from "../../styles/Colors";

interface Props {
    error?: any;
}

export const Container = styled.div<Props>`    
    position: relative;
    width: 100%;
    height: 60px;
    margin-bottom: 2.8rem;    
    
    input {
        width: 100%;
        padding: 1.5rem;
        
        border: 1px solid ${props => Colors.black};
        background: transparent;
        border-radius: 1.2rem;
        box-sizing: border-box;
        outline: none;
        box-shadow: .2rem .2rem .30rem rgba(0, 0, 0, 0.2);

        font-size: 1.6rem;
        font-weight: 300;
        color: ${props => Colors.primaryText};          
    }    
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