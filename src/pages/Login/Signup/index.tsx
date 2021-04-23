import React, { useContext, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, ContentForm, ContainerForm, LogoForm, BackBtn } from './styles';
import AuthContext from '../../../contexts';
import { CenterG, LabelG, RowG } from '../../../styles/Gstyles';
import Colors from '../../../styles/Colors';
import Input from '../../../components/Input';
import IconBtn from '../../../components/Buttons/IconBtn';
import { criarUsuario } from '../../../services/authService';

interface IError {
    [key: string]: any;
}

const Signup: React.FC = () => {
    const history = useHistory();
    const { setLoading } = useContext(AuthContext);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async (data: any) => {
        try {
            console.log('entrou')
            setLoading();
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome é obrigatório'),
                email: Yup.string().email('Formato do e-mail inválido').required('E-mail é obrigatório'),
                password: Yup.string()
                    .min(6, 'A senha deve ter no mínimo 6 caracteres')
                    .required('Senha é obrigatória'),
                confirmPassword: Yup.string()
                    .min(6, 'A confirmação da senha deve ter no mínimo 6 caracteres')
                    .oneOf([Yup.ref('password'), 'Confirmação da senha está incorreta'])
                    .required('Confirmação de senha é obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await criarUsuario(data).then(success => {
                setLoading();
                history.push('signup')
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
                        <BackBtn>
                            <IconBtn
                                icon="fas fa-arrow-circle-left"
                                background={Colors.white}
                                color={Colors.primary}
                                size="3.5rem"
                                paddingRight="1.5rem"
                                paddingLeft="1.5rem"
                                onSubmit={() => history.goBack()} />
                        </BackBtn>
                        <LogoForm>
                        </LogoForm>
                        <ContentForm>
                            <LabelG
                                marginBottom="2.8rem"
                                font="3.5rem"
                                align="left"
                                weight="bold"
                                color={Colors.primary}>Novo Usuário</LabelG>
                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <Input
                                    label="Nome Completo"
                                    name="nome"
                                    required={true} />
                                <Input
                                    label="E-mail"
                                    name="email"
                                    type="email"
                                    required={true} />
                                <Input
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    required={true} />
                                <Input
                                    label="Confirmar Senha"
                                    name="confirmPassword"
                                    type="password"
                                    required={true} />
                                <IconBtn
                                    label="Criar"
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

export default Signup;