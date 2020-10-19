import styled from "styled-components";

import Colors from "../../styles/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 7.0rem;
    padding: 0 2.0rem 0 2.0rem;

    justify-content: space-between;
    align-items: center;

    background: ${props => Colors.white};
    box-shadow: 1px 2px 5px #c9c9c9;
    border-top-right-radius: 2.8rem;

    @media (max-width: 650px) {
        border-top-right-radius: 0;
        position: relative;
        margin-top: 11rem;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

`;