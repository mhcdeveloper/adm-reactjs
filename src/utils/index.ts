
import { toast } from 'react-toastify';

import { IUserLogin } from "../shared/types/Login";
import { USER_INFO } from "./conts";

export const setUserToStorage = async (user: IUserLogin) => {
    if (user) {
        await localStorage.setItem(USER_INFO, JSON.stringify(user));
        return true;
    }
    return false;
}

export const getUserToStorage = async () => {
    let user = await localStorage.getItem(USER_INFO);
    return user;
}

export const clearUserToStorage = async () => {
    await localStorage.removeItem(USER_INFO);
    return true;
}

export const toasteSuccess = (msg: string) => {
    return toast.success(msg);
}

export const toasteError = (msg: string) => {
    return toast.error(msg);
}

export const toasteWarnning = (msg: string) => {
    return toast.warning(msg);
}