import React from 'react';

import Icon from '../../Icon';
import { Container } from './styles';
import { BtnG, LabelG } from '../../../styles/Gstyles';

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
        <Container 
            onClick={onSubmit}
            background={background}>
            <BtnG>
                <Icon name={icon} size={size} color={color} />
                {label && <LabelG weight="bold" marginLeft=".8rem" color={color}>{label}</LabelG>}
            </BtnG>
        </Container>
    );
}

export default IconBtn;