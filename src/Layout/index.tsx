import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Content from './Content';
import SideBar from './SideBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Router>
                    <SideBar />                
                    <Content />
                </Router>
            </Wrapper>
        </Container>
    );
}

export default Layout;