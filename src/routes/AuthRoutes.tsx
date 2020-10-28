import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Parceiros from '../pages/Parceiros';
import Produtos from '../pages/Produtos';
import Usuarios from '../pages/Usuarios';

export class PrivateRoute extends Route {
    render() {
        return (
            <Route render={(props: RouteComponentProps) => {
                if (this.props.component) {
                    return React.createElement(this.props.component);
                }

                if (this.props.render) {
                    return this.props.render(props);
                }
            }} />
        );
    }
}

const AuthRoutes = () => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard} />
            <PrivateRoute
                exact
                path="/produtos"
                component={Produtos} />
            <PrivateRoute
                exact
                path="/parceiros"
                component={Parceiros} />
            <PrivateRoute
                exact
                path="/usuarios"
                component={Usuarios} />
            <Redirect path="*" to="/" />
        </Switch>
    )
}

export default AuthRoutes;