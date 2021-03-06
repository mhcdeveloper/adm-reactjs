import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { ContainerG, LabelG } from '../../styles/Gstyles';
import Colors from '../../styles/Colors';
import IconBtn from '../Buttons/IconBtn';
import Input from '../Input';
import { Iinput } from '../../shared/types/InputType';
// import { ValidationInputs } from './ValidationInput';

interface IError {
    [key: string]: any;
}

interface Props {
    inputs: Iinput[];
    label: string;
    onSubmit: Function;
}

const Forms: React.FC<Props> = ({ inputs, label, onSubmit }) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async (data: any) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({});

            await schema.validate(data, {
                abortEarly: false,
            });
            onSubmit(data);
        } catch (err) {
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
            <Content>
                <ContainerG>
                    <LabelG
                        marginBottom="1.8rem"
                        font="2.6rem"
                        align="left"
                        weight="bold"
                        marginLeft="1.5rem"
                        color={Colors.primary}>{label}</LabelG>
                </ContainerG>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    {renderInputs()}
                    <IconBtn
                        label="Salvar"
                        size="0.5rem"
                        color={Colors.white}
                        background={Colors.primary}
                        onSubmit={() => formRef.current?.submitForm()} />
                </Form>
            </Content>
        </Container>
    );
}

export default Forms;