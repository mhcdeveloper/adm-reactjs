import React, { useEffect, useMemo, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from '../components/Loading';

import AuthContext from '../contexts';
import Layout from '../Layout';
import { API } from '../services/api';
import { clearUserToStorage, getUserToStorage } from '../utils';
import PublicRoutes from './PublicRoutes';
import { LOADING, SIGN_IN, SIGN_OUT } from './Types';

const Routes = () => {
    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
            switch (action.type) {
                case SIGN_IN:
                    return {
                        ...prevState,
                        authenticated: true,
                    };
                case SIGN_OUT:
                    return {
                        ...prevState,
                        authenticated: false,
                    };
                case LOADING:
                    return {
                        ...prevState,
                        loading: !prevState.loading
                    }
                default:
                    return {
                        ...prevState
                    }
            }
        },
        {
            authenticated: false,
            userToken: null,
            loading: false,
        }
    );

    const authContext = useMemo(
        () => ({
            setLoading: () => dispatch({ type: LOADING }),
            signIn: () => dispatch({ type: SIGN_IN }),
            signOut: () => dispatch({ type: SIGN_OUT }),
        }), []
    );

    useEffect(() => {
        getUser();
        interceptor();
    }, []);

    const interceptor = () => {
        API.interceptors.response.use(function (response) {
            return response;
        }, function (err) {
            if (err.response.status === 401 || err.response.data.error === 'unauthorized') {
                clearUserToStorage().then(_ => {
                    dispatch({ type: SIGN_OUT })
                });
            }
            return Promise.reject(err);
        });
    }

    const getUser = async () => {
        await getUserToStorage().then(user => {
            if (user) dispatch({ type: SIGN_IN });
        });
    }

    const { loading, authenticated } = state;

    return (
        <AuthContext.Provider value={authContext}>
            {loading && <Loading />}
            <Router>
                {authenticated ? <Layout /> : <PublicRoutes />}
            </Router>
        </AuthContext.Provider>
    )
}

export default Routes;