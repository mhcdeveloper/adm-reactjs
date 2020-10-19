import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import { Container, Main } from './styles';
import Dashboard from '../../pages/Dashboard';
import Usuarios from '../../pages/Usuarios';

const Content: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/usuarios" exact component={Usuarios} />
        </Switch>
      </Main>
    </Container>
  );
}

export default Content;