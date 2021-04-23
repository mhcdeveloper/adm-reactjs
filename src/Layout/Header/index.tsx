import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import IconBtn from '../../components/Buttons/IconBtn';
import Colors from '../../styles/Colors';
import { LabelG } from '../../styles/Gstyles';
import { Container, ItemMenu, MenuHeader } from './styles';
import { logout } from '../../services/authService';
import AuthContext from '../../contexts';

const Header: React.FC = () => {
    const { signOut, setLoading } = useContext(AuthContext);
    let location = useLocation();
    const [ pageTitle, setPageTitle ] = useState<String | any>('');

    useEffect(() => {
        const { state } = location;
        setPageTitle(state);
    }, [location]);

    const handleLogout = async () => {
        setLoading();
        await logout().then(isLogout => {
            setLoading();
            signOut()
        });
    }

    return (
        <Container>
            <LabelG weight="bold" color={Colors.primary}>{pageTitle}</LabelG>
            <MenuHeader>
                <ItemMenu>
                    <IconBtn 
                        icon="far fa-bell"
                        background={Colors.white}
                        color={Colors.primary}
                        size="2.5rem"
                        paddingRight="1.5rem"
                        paddingLeft="1.5rem"
                        onSubmit={() => alert('Notificações')} />
                </ItemMenu>
                <ItemMenu>
                    <IconBtn 
                        icon="far fa-user-circle"
                        background={Colors.white}
                        color={Colors.primary}
                        size="2.5rem"
                        paddingRight="1.5rem"
                        paddingLeft="1.5rem"
                        onSubmit={() => handleLogout()} />
                </ItemMenu>
            </MenuHeader>
        </Container>
    );
}

export default Header;