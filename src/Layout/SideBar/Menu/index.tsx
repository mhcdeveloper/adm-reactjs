import React from 'react';
import { Link } from 'react-router-dom';

import { IMenu } from './IMenu';
import { Label } from '../../../styles/Gstyles';
import { Container, Icon, Rota } from './styles';

const Menu: React.FC<IMenu> = ({ label, path, icon }) => {
    return (
        <Container>
            <Link to={path}>
                {icon && <Icon className={icon} />}
                <Rota>
                    <Label align="left" marginLeft="1.4rem">{label}</Label>
                </Rota>
            </Link>
        </Container>
    );
}

export default Menu;