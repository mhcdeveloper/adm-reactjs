import React, { useMemo, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthContext from '../contexts';
import Layout from '../Layout';
import PublicRoutes from './PublicRoutes';

const Routes = () => {    
    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
            switch (action.type) {
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        authenticated: true,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        authenticated: false,
                    };
            }
        },
        {
            authenticated: true,
            userToken: null,
        }
    );

    const authContext = useMemo(
        () => ({
            signIn: () => dispatch({ type: 'SIGN_IN' }),
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
        }), []
    );
    
    return (
        <AuthContext.Provider value={authContext}>
            <Router>
                {state.authenticated ? <Layout /> : <PublicRoutes />}
            </Router>
        </AuthContext.Provider>
    )
}

export default Routes;