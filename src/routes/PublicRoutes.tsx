import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

const PublicRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/login"
                component={Login} />
            <Route path="*" exact component={() => <h1>ok</h1>} />
        </Switch>
    )
}

export default PublicRoutes;