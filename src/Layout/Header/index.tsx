import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import IconBtn from '../../components/Buttons/IconBtn';
import Colors from '../../styles/Colors';
import { LabelG } from '../../styles/Gstyles';
import { Container, ItemMenu, MenuHeader } from './styles';

const Header: React.FC = () => {
    let location = useLocation();
    const [ pageTitle, setPageTitle ] = useState<String | any>('');

    useEffect(() => {
        const { state } = location;
        setPageTitle(state);
    }, [location]);

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
                        onSubmit={() => alert('ok')} />
                </ItemMenu>
                <ItemMenu>
                    <IconBtn 
                        icon="far fa-user-circle"
                        background={Colors.white}
                        color={Colors.primary}
                        size="2.5rem"
                        onSubmit={() => alert('ok')} />
                </ItemMenu>
            </MenuHeader>
        </Container>
    );
}

export default Header;