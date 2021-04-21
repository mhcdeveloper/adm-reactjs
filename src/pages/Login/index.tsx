import React, { useContext, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, ContentForm, ContainerForm, LogoForm } from './styles';
import Input from '../../components/Input';
import { CenterG, LabelG, RowG } from '../../styles/Gstyles';
import Colors from '../../styles/Colors';
import IconBtn from '../../components/Buttons/IconBtn';
import AuthContext from '../../contexts';
import Logo from '../../components/Logo';
import { login } from '../../services/authService';

interface IError {
    [key: string]: any;
}

const Login: React.FC = () => {
    const { signIn, setLoading } = useContext(AuthContext);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async (data: any) => {
        try {
            setLoading();
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                username: Yup.string().email('Formato do e-mail inválido').required('E-mail é obrigatório'),
                password: Yup.string().min(4, 'A senha deve ter no mínimo 4 caracteres').required('Senha é obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await login(data).then(success => {
                setLoading();
                signIn();
            }).catch(err => {
                setLoading();
            })
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

    return (
        <Container>
            <CenterG>
                <RowG
                    width="100%"
                    justify="center">
                    <ContainerForm>
                        <LogoForm>
                            <Logo />
                        </LogoForm>
                        <ContentForm>
                            <LabelG
                                marginBottom="1.8rem"
                                font="2.6rem"
                                align="left"
                                weight="bold"
                                marginLeft="1.5rem"
                                color={Colors.primary}>Login</LabelG>
                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <Input
                                    label="E-mail"
                                    name="username"
                                    type="email"
                                    required={true} />
                                <Input
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    required={true} />
                                <IconBtn
                                    label="Entrar"
                                    size="2.5rem"
                                    color={Colors.white}
                                    background={Colors.primary}
                                    onSubmit={() => formRef.current?.submitForm()} />
                            </Form>
                        </ContentForm>
                    </ContainerForm>
                </RowG>
            </CenterG>
        </Container>
    );
}

export default Login;