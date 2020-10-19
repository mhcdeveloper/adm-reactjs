import React from 'react';

import IconBtn from '../../components/Buttons/IconBtn';
import { Label } from '../../styles/Gstyles';
import { Container, UserInfo } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Label>Header</Label>
            <UserInfo>
                <IconBtn 
                    icon="far fa-bell"
                    size="2.5rem"
                    onSubmit={() => alert('ok')} />
            </UserInfo>
        </Container>
    );
}

export default Header;