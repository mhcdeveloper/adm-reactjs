import React from 'react';
import { NavLink } from 'react-router-dom';

import { IMenu } from './IMenu';
import { Container, Icon, Rota, Label } from './styles';

const Menu: React.FC<IMenu> = ({ label, path, icon }) => {    
    return (
        <NavLink
            to={path}
            activeClassName="isActivedLink">
            <Container>
                {icon && <Icon className={icon} />}
                <Rota>
                    <Label>{label}</Label>
                </Rota>
            </Container>
        </NavLink>
    );
}

export default Menu;