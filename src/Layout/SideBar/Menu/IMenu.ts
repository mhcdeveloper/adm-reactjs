export interface IMenu {
    label: string;
    rota: IPath;
    icon?: string;
}

interface IPath {
    pathname: string;
    state?: any;
}