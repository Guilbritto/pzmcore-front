import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import logo from '../../../assets/images/logoligthTheme.svg';

import {
  FormProvider, useForm,
} from 'react-hook-form';

import {  useHistory } from 'react-router-dom';
import { BoxLogin } from '../../Login/styles';
import { useUser } from '../../../hooks/UserContext';
import CheckCode from '../../../components/CheckCode';

const VerificationCode: React.FC = () => {
  const history = useHistory();
  const methods = useForm();
  const {forgotPassword} = useUser()
   const onSubmit = useCallback(
    async (data: any) => {
      await forgotPassword(data.email);
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
              <h1>Verification Code</h1>
            </span>

           
            <CheckCode />
            
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

export default VerificationCode;