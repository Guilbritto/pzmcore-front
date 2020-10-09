import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logoligthTheme.svg';

import {
  FormProvider, useForm,
} from 'react-hook-form';

import Input from '../../components/Input';
import {  useHistory } from 'react-router-dom';
import { BoxLogin } from '../Login/styles';
import { useUser } from '../../hooks/UserContext';

const Forgot: React.FC = () => {
  const history = useHistory();
  const methods = useForm();
  const {forgotPassword} = useUser()


   const onSubmit = useCallback(
    async (data: any) => {
      await forgotPassword(data.email);
      
      history.push('/forgot/verification', {email: data.email})
    },
    [],
  );

  return <Container>
    <BoxLogin>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <FormProvider {...methods}>
          <form name="teste" onSubmit={methods.handleSubmit(onSubmit)}>
            
            
            <span>
              <h1>Forgot Password</h1>
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
          
            <footer>
              <button type="submit"> Send </button>
              <button id="signUp" type="button" onClick={() => history.push('/')}>
                Back to Login
              </button>
             
            </footer>

          </form>
        </FormProvider>
        <footer>
          
        </footer>
      </BoxLogin>
  </Container>;
}

export default Forgot;