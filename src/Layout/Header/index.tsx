import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import IconBtn from '../../components/Buttons/IconBtn';
import Colors from '../../styles/Colors';
import { Label } from '../../styles/Gstyles';
import { Container, UserInfo } from './styles';

const Header: React.FC = () => {
    let location = useLocation();
    const [ pageTitle, setPageTitle ] = useState<String | any>('');

    useEffect(() => {
        const { state } = location;
        setPageTitle(state);
    }, [location]);

    return (
        <Container>
            <Label color={Colors.primary}>{pageTitle}</Label>
            <UserInfo>
                <IconBtn 
                    icon="far fa-bell"
                    background={Colors.white}
                    color={Colors.primary}
                    size="2.5rem"
                    onSubmit={() => alert('ok')} />
                <IconBtn 
                    icon="far fa-user-circle"
                    background={Colors.white}
                    color={Colors.primary}
                    size="2.5rem"
                    onSubmit={() => alert('ok')} />
            </UserInfo>
        </Container>
    );
}

export default Header;