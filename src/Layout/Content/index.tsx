import React from 'react';

import Header from '../Header';
import { Container, Main } from './styles';

import AuthRoutes from '../../routes/AuthRoutes';

const Content: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <AuthRoutes />
      </Main>
    </Container>
  );
}

export default Content;