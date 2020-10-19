import styled from "styled-components";

import Colors from "../../styles/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    background: ${props => Colors.lightFundo};
`;

export const Main = styled.div`
    width: 100%;
    margin: 0.2rem auto;
`;