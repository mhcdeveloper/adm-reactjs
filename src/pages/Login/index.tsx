import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, ContentForm } from './styles';
import Input from '../../components/Input';
import { Label } from '../../styles/Gstyles';
import Colors from '../../styles/Colors';
import IconBtn from '../../components/Buttons/IconBtn';

interface IError {
    [key: string]: any;
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                dsemalog: Yup.string().email('Formato do e-mail inválido').required('E-mail é obrigatório'),
                dssenha: Yup.string().min(4, 'A senha deve ter no minimo 4 caracteres').required('Senha é obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false,
            });
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

    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <ContentForm>
                    <Label
                        marginBottom="1.8rem"
                        font="2.6rem"
                        weight="bold"
                        color={Colors.white}>Login</Label>
                    <Input name="email" placeholder="E-mail" />
                    <Input name="senha" type="password" placeholder="Senha" />
                    <IconBtn
                        icon="far fa-bell"
                        label="Entrar"
                        size="2.5rem"
                        color={Colors.primary}
                        background={Colors.white}
                        onSubmit={() => alert('ok')} />
                </ContentForm>
            </Form>
        </Container>
    );
}

export default Login;