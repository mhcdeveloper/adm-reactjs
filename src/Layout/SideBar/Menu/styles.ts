import styled from "styled-components";
import Colors from "../../../styles/Colors";

export const Container = styled.li`
    width: 100%;
    display: flex;
    list-style: none;

    padding: 1.0rem;
    margin: 0.05rem;

    a {
        text-decoration: none;
        text-align: center;
        display: flex;
        justify-content: space-between;                
    }

    :hover {
        background: ${props => Colors.primary};
        color: ${props => Colors.white};
        cursor: pointer;

        border-radius: 2.0rem;

        i {
            color: ${props => Colors.white};
        }

        span {
            color: ${props => Colors.white};
        }
    }

`;

export const Rota = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.i`
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    color: ${props => Colors.primary};    
`;