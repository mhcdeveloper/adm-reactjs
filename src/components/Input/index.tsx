import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Error, Label } from './styles';

interface Props {
    name: string;
    label?: string;
};

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            path: 'value',
            ref: inputRef.current,
        })
    }, [fieldName, registerField]);
    
    return (
        <Container error={error}>
            {label && <Label>{label}</Label>}
            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}                
            />            
            { error && <Error>{error}</Error>}
        </Container>
    );
};
export default Input;