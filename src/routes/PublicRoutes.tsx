import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Signin from '../pages/Login/Signin';
import Signup from '../pages/Login/Signup';

const PublicRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/login"
                component={Signin} />
            <Route
                exact
                path="/signup"
                component={Signup} />
            <Redirect path="*" to="/login" />
        </Switch>
    )
}

export default PublicRoutes;