import React, { useCallback, useState } from 'react';
import { Container, BoxLogin } from './styles';
import logo from '../../assets/images/logoligthTheme.svg';

import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';

import Input from '../../components/Input';
import SignIn from '../SignIn';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const methods = useForm();
  const { addToast } = useToast();

  const history = useHistory();
  const onSubmit = useCallback(
    async (data: any) => {
      const result = await signIn(data.email, data.password);
      if (result) {
        history.push('/dashboard');
      }
    },
    [addToast],
  );

  return (
    <Container>
      <BoxLogin>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <FormProvider {...methods}>
          <form name="teste" onSubmit={methods.handleSubmit(onSubmit)}>
            <span>
              <h1>Login</h1>
            </span>

            <Input
              placeHolder="E-mail"
              name="email"
              validate={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              }}
            />
            <Input
              placeHolder="Password"
              name="password"
              type="password"
              validate={{ required: true }}
            />
            <footer>
              <button type="submit"> Sign In </button>
              <button type="button" onClick={() => history.push('/signin')}>
                Sign Up
              </button>
            </footer>
          </form>
        </FormProvider>
        <footer></footer>
      </BoxLogin>
    </Container>
  );
};

export default Login;
