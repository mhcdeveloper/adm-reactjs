import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import { Container, Main } from './styles';

import Dashboard from '../../pages/Dashboard';
import Usuarios from '../../pages/Usuarios';
import Produtos from '../../pages/Produtos';
import Parceiros from '../../pages/Parceiros';

const Content: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/produtos" exact component={Produtos} />
          <Route path="/parceiros" exact component={Parceiros} />
          <Route path="/usuarios" exact component={Usuarios} />
        </Switch>
      </Main>
    </Container>
  );
}

export default Content;