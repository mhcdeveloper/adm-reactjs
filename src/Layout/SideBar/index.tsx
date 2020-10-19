import React, { useEffect, useState } from 'react';

import Menu from './Menu';
import { IMenu } from './Menu/IMenu';
import { Container, NavBar, NavItem } from './styles';

const data = [
    {
        id: 1,
        label: "Dashboard",
        path: "/dashboard",
        icon : "fas fa-tachometer-alt"
    },
    {
        id: 2,
        label: "Usuários",
        path: "/usuairos",
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
            {renderMenus()}
        </Container>
    );
}

export default SideBar;