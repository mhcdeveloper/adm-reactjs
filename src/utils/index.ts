
import { IUserLogin } from "../shared/types/UserLogin";
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