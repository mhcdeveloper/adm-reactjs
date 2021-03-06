import React from 'react';
import { NavLink } from 'react-router-dom';

import { IMenu } from './IMenu';
import { Container, Icon, Rota, Label } from './styles';

const Menu: React.FC<IMenu> = ({ label, rota, icon }) => {    
    return (
        <NavLink to={rota} 
            activeClassName="link-actived">
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