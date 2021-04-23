import React from 'react';

import Icon from '../../Icon';
import { Container } from './styles';
import { BtnG, LabelG } from '../../../styles/Gstyles';

interface Props {
    label?: string;
    icon?: string;
    color: string;
    background: string;
    paddingRight?: string;
    paddingLeft?: string;
    size: string;
    onSubmit: () => void;
}

const IconBtn: React.FC<Props> = ({ label, icon, size, background, color, onSubmit, paddingRight, paddingLeft }) => {
    return (
        <Container 
            onClick={onSubmit}
            background={background}>
            <BtnG paddingLeft={paddingLeft} paddingRight={paddingRight}>
                <Icon name={icon} size={size} color={color} />
                {label && <LabelG weight="bold" marginLeft=".8rem" color={color}>{label}</LabelG>}
            </BtnG>
        </Container>
    );
}

export default IconBtn;