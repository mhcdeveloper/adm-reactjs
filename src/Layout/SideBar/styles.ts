import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
    width: 20%;
    height: 95vh;
    
    background: ${props => Colors.darkPrimary};
    box-shadow: 5px 5px 5px #c9c9c9;
    
    border-top-left-radius: 2.8rem;
    border-bottom-left-radius: 2.8rem;

    transition: 0.5s;

    @media (max-width: 800px) {
        width: 10%;
        height: 100vh;

        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    @media (max-width: 650px) {
        width: 100vw;
        height: 12rem;
        position: fixed;

        nav {
            margin-top: 0;    
        }
    }
`;

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2.0rem;

    @media (max-width: 800px) {
        strong {
            font-size: 2.6rem;
        }
    }

    @media (max-width: 650px) {
        padding-top: 0.6rem;        
    }    
`;

export const Title = styled.strong`
    font-size: 3.8rem;
    font-weight: 700;
    text-align: center;

    color: ${props => Colors.white};
`;

export const NavBar = styled.nav`
    width: 100%;
    margin-top: 6rem;    
`;

export const NavItem = styled.ul`
    display: flex;
    flex-direction: column;    
    list-style: none;

    margin: 2.5rem 0 2.5rem 0;

    @media (max-width: 650px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        margin-top: .6rem;
    }
`;