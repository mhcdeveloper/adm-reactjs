import React from 'react';

import { Btn, Label, Row } from '../../../styles/Gstyles';
import Icon from '../../Icon';

interface Props {
    label?: string;
    icon?: string;
    size: string;
    onSubmit: () => void;
}

const IconBtn: React.FC<Props> = ({ label, icon, size, onSubmit }) => {
    return (
        <Row>
            <Btn onClick={onSubmit}>
                <Icon name={icon} size={size} />
                {label && <Label>{label}</Label>}
            </Btn>
        </Row>
    );
}

export default IconBtn;