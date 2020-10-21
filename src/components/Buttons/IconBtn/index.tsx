import React from 'react';

import { Btn, Label, Row } from '../../../styles/Gstyles';
import Icon from '../../Icon';

interface Props {
    label?: string;
    icon?: string;
    color: string;
    background: string;
    size: string;
    onSubmit: () => void;
}

const IconBtn: React.FC<Props> = ({ label, icon, size, background, color, onSubmit }) => {
    return (
        <Row
            marginLeft="1.0rem"
            marginRight="1.0rem"
            color={background}
            border="1.6rem">
            <Btn
                onClick={onSubmit}>
                <Icon name={icon} size={size} color={color} />
                {label && <Label weight="bold" marginLeft=".8rem" color={color}>{label}</Label>}
            </Btn>
        </Row>
    );
}

export default IconBtn;