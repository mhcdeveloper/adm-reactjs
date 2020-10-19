import styled from "styled-components";
import Colors from "../../../styles/Colors";

export const Container = styled.li`
    width: 100%;
    display: flex;
    list-style: none;

    padding: 2.0rem;
    margin: 0.05rem;    
    
    :hover {
        background: ${props => Colors.white};
        color: ${props => Colors.darkPrimary};
        cursor: pointer;

        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

        transform: translate(2px, -2px);

        i {
            color: ${props => Colors.darkPrimary};
        }

        span {
            color: ${props => Colors.darkPrimary};
        }        
    }    

`;

export const Label = styled.span`
    font-size: 1.8rem;
    color: ${props => Colors.white};
    margin-left: 1.4rem;
`;

export const Rota = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.i`
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    color: ${props => Colors.white};    
`;