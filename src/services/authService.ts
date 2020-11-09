// import axios from 'axios';

// import { API } from './api';
import { IUserLogin } from "../shared/types/UserLogin";
import { clearUserToStorage, setUserToStorage } from '../utils';

// const CancelToken = axios.CancelToken;

export const login = async (user: IUserLogin) => {
    try {     
        // const source = CancelToken.source();
        // let response: any = null;
        // setTimeout(() => {
        //     if (response == null) {
        //         source.cancel();
        //     }
        // }, 15000);
        // response = await API.post('/authentication', user, { cancelToken: source.token })
        //     .then(async logged => {
        //         API.defaults.headers.common['x-access-token'] = logged.data.TOKEN;
        //         await setUserToStorage(logged.data);
        //         return true;
        //     })
        //     .catch(err => {
        //         return false
        //     })

        //Simulando uma api lógico que não vamos gravar a senha do usuario no localstorage
        setTimeout(async () => {
            await setUserToStorage({ ...user, senha: '', token: '12121212' });
            return true;
        }, 3000);
    } catch (error) {
        return false;
    }
}

export const logout = async () => {
    try {
        await clearUserToStorage();
        return true;
    } catch (error) {
        return false;
    }
}