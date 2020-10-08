import React, { useCallback } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logoligthTheme.svg';
import Input from '../../components/Input';
import { useUser } from '../../hooks/UserContext';
import { BoxSignIn, Container } from './styles';

const SignIn: React.FC = () => {
  const methods = useForm();
  const history = useHistory();
  const {signUp } = useUser();
  
  const onSubmit = useCallback( async (data) => {
    
    await signUp(data);
    console.log('cadastrou')

  }, []);
  
  
  return (
    <Container>
      <BoxSignIn>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <span>
              <h1>Sign Up</h1>
            </span>

            <Input
              placeHolder="Name"
              name="name"
              validate={{
                required: true,
              }}
            />

            <Input
              placeHolder="E-mail"
              name="email"
              validate={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
            />

            <Input
              placeHolder="Password"
              name="password"
              type="password"
              validate={{
                required: true,
              }}
            />
            <footer>
              <button type="submit"> Register </button>
              <button type="button" onClick={() => history.push('/')}>
                Sign In
              </button>
            </footer>
          </form>
        </FormProvider>
        <footer></footer>
      </BoxSignIn>
    </Container>
  );
};

export default SignIn;
