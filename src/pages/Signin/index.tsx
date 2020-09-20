import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import heartIcon from '../../assets/icons/heart.svg';
import google from '../../assets/icons/google.png';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.css';

import {
  Container,
  Content,
  AnimationContainer,
  BoxCheckerContainer,
  GroupCheckerBox,
  GroupText,
  Footer,
  WrapperText,
  WrapperLink,
  Background,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        // se o erro for gerado pelo Yupi, retorna o erro
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        // senão, vai disparar um toast
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um  erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history]
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <div className="google">
              <img src={google} alt="heart icon" />
              <span>Entrar com o Google</span>
            </div>
            <Input name="email" icon={FiMail} placeholder="Email"></Input>

            <Input
              name="password"
              icon={FiLock} // passando um component como propriedade de outro component
              type="password"
              placeholder="Senha"
            ></Input>

            <BoxCheckerContainer>
              <GroupCheckerBox>
                <input type="checkbox" />
                <span>Lembrar-me</span>
              </GroupCheckerBox>
              <GroupText>
                <a href="forgot">Esqueci minha senha</a>
              </GroupText>
            </BoxCheckerContainer>

            <Button type="submit">Entrar</Button>
          </Form>

          <Footer>
            <WrapperLink>
              <p>Não tem conta?</p>
              <Link to="/register">Cadastre-se</Link>
            </WrapperLink>
          </Footer>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signin;
