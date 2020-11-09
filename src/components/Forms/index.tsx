import React, { useContext, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container } from './styles';
import AuthContext from '../../contexts';
import { LabelG } from '../../styles/Gstyles';
import Colors from '../../styles/Colors';
import IconBtn from '../Buttons/IconBtn';
import Input from '../Input';
import { Iinput } from '../../shared/types/InputType';
import { ValidationInputs } from './ValidationInput';

interface IError {
    [key: string]: any;
}

interface Props {
    inputs: Iinput[];
    label: string;
}

const Forms: React.FC<Props> = ({ inputs, label }) => {
    const { setLoading } = useContext(AuthContext);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async (data: any) => {
        try {
            setLoading();
            let validation: any;
            inputs.filter(input => input.required === true).map(input => {
                const { name } = input;
                let type = ValidationInputs(input);
                validation = { ...validation, [name]: type }
                console.log(type)
            });
            console.log(validation)

            formRef.current?.setErrors({});
            const schema = Yup.object().shape({});

            await schema.validate(data, {
                abortEarly: false,
            });
            setLoading();
        } catch (err) {
            setLoading();
            const validationErrors: IError = {};

            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error: any) => {
                    validationErrors[error.path] = error.message;
                });

                formRef.current?.setErrors(validationErrors);
            }
        }
    };

    const renderInputs = () => {
        let visibleInputs = inputs.filter(input => input.visible === true);
        return visibleInputs.map((input: Iinput, index: number) => (
            <Input
                key={index}
                name={input.name}
                label={input.label}
                required={input.required}
                type={input.type}
                placeholder={input.placeholder} />
        ))
    }
    return (
        <Container>
            <LabelG
                marginBottom="2.8rem"
                font="2.6rem"
                align="left"
                weight="bold"
                marginLeft="1.5rem"
                color={Colors.primary}>{label}</LabelG>
            <Form ref={formRef} onSubmit={handleSubmit}>
                {renderInputs()}
                <IconBtn
                    label="Entrar"
                    size="0.5rem"
                    color={Colors.white}
                    background={Colors.primary}
                    onSubmit={() => formRef.current?.submitForm()} />
            </Form>
        </Container>
    );
}

export default Forms;