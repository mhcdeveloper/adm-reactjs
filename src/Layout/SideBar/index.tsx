import React, { useEffect, useState } from 'react';

import Menu from './Menu';
import { IMenu } from './Menu/IMenu';
import { Brand, Container, NavBar, NavItem, Title } from './styles';

const data = [
    {
        id: 1,
        label: "Dashboard",
        path: "/dashboard",
        icon: "fas fa-tachometer-alt"
    },
    {
        id: 2,
        label: "Produtos",
        path: "/produtos",
        icon: "fas fa-images"
    },
    {
        id: 3,
        label: "Colaboradores",
        path: "/colaboradores",
        icon: "fas fa-address-card"
    },
    {
        id: 4,
        label: "Parceiros",
        path: "/parceiros",
        icon: "fa fa-handshake"
    },
    {
        id: 5,
        label: "Usuários",
        path: "/usuarios",
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
                            path={menu.path}
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
                <Title>Melk</Title>
            </Brand>
            {renderMenus()}
        </Container>
    );
}

export default SideBar;