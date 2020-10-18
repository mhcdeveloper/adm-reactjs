import styled from "styled-components";

import Colors from "../../styles/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;

    background: ${props => Colors.secondary};
`;

export const Main = styled.div`
    width: 75%;
    scroll-behavior: auto;
`;