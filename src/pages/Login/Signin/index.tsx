import React, { useContext, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, ContentForm, ContainerForm, LogoForm, SignupBtn } from './styles';
import Input from '../../../components/Input';
import { CenterG, LabelG, RowG } from '../../../styles/Gstyles';
import Colors from '../../../styles/Colors';
import IconBtn from '../../../components/Buttons/IconBtn';
import AuthContext from '../../../contexts';
import Logo from '../../../components/Logo';
import { login } from '../../../services/authService';
import { toasteError } from '../../../utils';

interface IError {
    [key: string]: any;
}

const Signin: React.FC = () => {
    const history = useHistory();
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
                toasteError("Não foi possivel fazer o login, verifique os dados informados");
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
                        </LogoForm>
                        <ContentForm>
                            <LabelG
                                marginBottom="2.8rem"
                                font="3.5rem"
                                align="left"
                                weight="bold"
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
                            <SignupBtn onClick={() => history.push('signup')}>
                                <LabelG
                                    font="1.6rem"
                                    align="left"
                                    weight="bold"
                                    color={Colors.primary}>Não possui registro ? Criar</LabelG>
                            </SignupBtn>
                        </ContentForm>
                    </ContainerForm>
                </RowG>
            </CenterG>
        </Container>
    );
}

export default Signin;