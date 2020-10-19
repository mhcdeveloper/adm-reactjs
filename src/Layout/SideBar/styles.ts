import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
    width: 20%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => Colors.white};
`;

export const NavBar = styled.nav`
    width: 100%;
`;

export const NavItem = styled.ul`
    display: flex;
    flex-direction: column;    
    list-style: none;

    padding-left: 1.5rem;
`;