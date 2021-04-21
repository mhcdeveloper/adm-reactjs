import axios from 'axios';

import { API } from './api';
import { IUserLogin } from "../shared/types/UserLogin";
import { clearUserToStorage, setUserToStorage } from '../utils';

const CancelToken = axios.CancelToken;
const { REACT_APP_CLIENT_NAME, REACT_APP_CLIENT_SECRET } = process.env;

export const login = async (user: IUserLogin) => {
    return new Promise(async (resolve, reject) => {
        try {

            let data = new FormData();
            data.append("grant_type", "password");
            data.append("username", user.username);
            data.append("password", user.password);
            const source = CancelToken.source();
            let response: any = null;
            setTimeout(() => {
                if (response == null) {
                    source.cancel();
                }
            }, 15000);
            response = await API.post('/mhc-auth/oauth/token',
                data,
                {
                    cancelToken: source.token,
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    auth: { username: 'myappname123', password: 'myappsecret123' }
                })
                .then(async logged => {
                    API.defaults.headers.common['x-access-token'] = logged.data.TOKEN;
                    await setUserToStorage(logged.data);
                    resolve(true);
                })
                .catch(err => {
                    reject(err);
                });
        } catch (error) {
            reject(error);
        }
    })
}

export const logout = async () => {
    try {
        await clearUserToStorage();
        return true;
    } catch (error) {
        return false;
    }
}