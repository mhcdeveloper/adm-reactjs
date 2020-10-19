import styled from "styled-components";

import Colors from "../../styles/Colors";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 7.0rem;

    background: ${props => Colors.white};
    box-shadow: 1px 2px 5px #dcdcdc;
`;