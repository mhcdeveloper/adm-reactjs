import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

const PublicRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/login"
                component={Login} />
            <Redirect path="*" to="/login" />
        </Switch>
    )
}

export default PublicRoutes;