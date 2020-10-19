import styled from "styled-components";
import Colors from "../../../styles/Colors";

export const Container = styled.li`
    width: 100%;
    display: flex;
    list-style: none;

    padding: 2.0rem;
    margin: 0.05rem;    
    
    &:hover {
        background: ${props => Colors.white};
        color: ${props => Colors.darkPrimary};
        cursor: pointer;

        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;        

        i {
            color: ${props => Colors.darkPrimary};
        }

        span {
            color: ${props => Colors.darkPrimary};
        }        
    }      

    @media (max-width: 650px) {        
        &:hover {
            background: ${props => Colors.white};
            color: ${props => Colors.darkPrimary};
            cursor: pointer;

            border-radius: 3rem;            
        }
    }      
`;

export const Label = styled.span`
    font-size: 1.8rem;
    color: ${props => Colors.white};
    margin-left: 1.4rem;    
`;

export const Rota = styled.div`
    width: 85%;
    display: flex;
    align-items: center;    

    @media (max-width: 800px) {
        display: none !important;
    }    
`;

export const Icon = styled.i`
    width: 15%;
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    color: ${props => Colors.white};    

    @media (max-width: 800px) {
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 650px) {
        font-size: 3rem;
    }
`;