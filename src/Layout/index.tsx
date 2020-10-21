import React from 'react';

import Content from './Content';
import SideBar from './SideBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <SideBar />
                <Content />
            </Wrapper>
        </Container>
    );
}

export default Layout;