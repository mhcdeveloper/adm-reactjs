import React, { useEffect, useState } from 'react';

import Menu from './Menu';
import { IMenu } from './Menu/IMenu';
import { Brand, Container, NavBar, NavItem, Title } from './styles';

const data = [
    {
        id: 1,
        label: "Dashboard",
        rota: { pathname: "/dashboard", state: "Dashboard" },
        icon: "fas fa-tachometer-alt"
    },
    {
        id: 2,
        label: "Produtos",
        rota: { pathname: "/produtos", state: "Produtos" },
        icon: "fas fa-images"
    },
    {
        id: 4,
        label: "Parceiros",
        rota: { pathname: "/parceiros", state: "Parceiros" },
        icon: "fa fa-handshake"
    },
    {
        id: 5,
        label: "Usuários",
        rota: { pathname: "/usuarios", state: "Usuários" },
        icon: "fas fa-users"
    },
]

const SideBar: React.FC = () => {
    const [menus, setMenus] = useState<IMenu[]>([]);

    useEffect(() => {
        setMenus(data);
    }, []);

    function renderMenus() {
        return (
            <NavBar>
                <NavItem>
                    {menus.map((menu: any, index: number) => (
                        <Menu
                            key={index}
                            rota={menu.rota}
                            label={menu.label}
                            icon={menu.icon} />
                    ))}
                </NavItem>
            </NavBar>
        )
    }

    return (
        <Container>
            <Brand>
                <Title>Painel Adm</Title>
            </Brand>
            {renderMenus()}
        </Container>
    );
}

export default SideBar;