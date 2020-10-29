import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';

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
            <Route
                exact
                path="/404"
                component={PageNotFound} />
                
            <Redirect path="*" to="/404" />
        </Switch>
    )
}

export default AuthRoutes;