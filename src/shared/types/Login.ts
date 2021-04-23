export interface IUserLogin {
    username: string;
    password: string;
    grant_type?: String;
    token?: string;
    perfil?: string;
}

export interface IUsuario {
    nome: string;
    email: string;
    password: string;
    perfil?: string;
}