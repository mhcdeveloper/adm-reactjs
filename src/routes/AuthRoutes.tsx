import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

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
        <>
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
            <Route path="*" exact component={() => <h1>ok</h1>} />
        </>
    )
}

export default AuthRoutes;