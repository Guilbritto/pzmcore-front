import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import logo from '../../../assets/images/logoligthTheme.svg';

import { BoxLogin } from '../../Login/styles';
import { useHistory, useLocation } from 'react-router-dom';
import Input from '../../../components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { useUser } from '../../../hooks/UserContext';
import { useToast } from '../../../hooks/ToastContext';

const PasswordRedefine: React.FC = () => {
  const history = useHistory()
  const methods = useForm();
  const {addToast} = useToast()
  const { forgotChangePassword } = useUser()
  const location = useLocation<{email: string, code:string}>()
   const onSubmit = useCallback(
    async (data: any) => {
      const { email, code } = location.state;
      if(data.newPassword === data.confirmationPassword){
        await forgotChangePassword(email, data.newPassword,  code)
        addToast({
          title: 'Password changed',
          description: 'Your password has been changed successfully',
          type: 'success',
        })
      }else{
        addToast({
          title: 'Error',
          description: 'New password and confirmation password does not match',
          type: 'error',
        })
      }
      
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
              <h1>Redefine Password</h1>
            </span>

            <Input
              placeHolder="New Password"
              name="newPassword"
              type="password"
              validate={{ required: true }}
            />
            <Input
              placeHolder="Confirmation Password"
              name="confirmationPassword"
              type="password"
              validate={{ required: true }}
            />

            <footer>
              <button type="submit"> Confirmation </button>
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

export default PasswordRedefine;