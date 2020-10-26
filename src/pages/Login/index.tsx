import React, { useContext, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, ContentForm, ContainerForm, Img, ContainerImg, LogoForm } from './styles';
import Input from '../../components/Input';
import { CenterG, LabelG, RowG } from '../../styles/Gstyles';
import Colors from '../../styles/Colors';
import IconBtn from '../../components/Buttons/IconBtn';
import AuthContext from '../../contexts';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/Logo';

interface IError {
    [key: string]: any;
}

const Login: React.FC = () => {
    let history = useHistory();
    const { signIn } = useContext(AuthContext);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            signIn();
            history.push('/');
            // formRef.current?.setErrors({});
            // const schema = Yup.object().shape({
            //     dsemalog: Yup.string().email('Formato do e-mail inválido').required('E-mail é obrigatório'),
            //     dssenha: Yup.string().min(4, 'A senha deve ter no minimo 4 caracteres').required('Senha é obrigatória')
            // });

            // await schema.validate(data, {
            //     abortEarly: false,
            // });
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
            <CenterG>
                <RowG
                    width="100%"
                    justify="center">
                    <ContainerForm>
                        <LogoForm>
                            <Logo />
                        </LogoForm>
                        <ContentForm>
                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <LabelG
                                    marginBottom="1.8rem"
                                    font="2.6rem"
                                    align="left"
                                    weight="bold"
                                    marginLeft="1.5rem"
                                    color={Colors.primary}>Login</LabelG>
                                <Input name="email" placeholder="E-mail" />
                                <Input name="senha" type="password" placeholder="Senha" />
                                <IconBtn
                                    label="Entrar"
                                    size="2.5rem"
                                    color={Colors.white}
                                    background={Colors.primary}
                                    onSubmit={() => formRef.current?.submitForm()} />
                            </Form>
                        </ContentForm>
                    </ContainerForm>
                    <ContainerImg>
                        <Img>
                            <Logo />
                        </Img>
                    </ContainerImg>
                </RowG>
            </CenterG>
        </Container>
    );
}

export default Login;