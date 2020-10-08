import React, { useCallback, useState } from 'react';
import { Container, BoxLogin } from './styles';
import logo from '../../assets/images/logoligthTheme.svg';

import { useFormContext } from 'react-hook-form';

import Input from '../../components/Input';
import SignIn from '../SignIn';

const Login: React.FC = () => {
  const { handleSubmit } = useFormContext();
  const [isLogin, setIsLogin] = useState(true);

  const backToLogin = useCallback(() => {
    setIsLogin(true);
  }, []);

  const onSubmit = useCallback(async (data: any) => {
    // const user = await api.post(LOGIN, data);
    console.log(data);
  }, []);

  return (
    <Container>
      <SignIn isLogin={isLogin} setIsLogin={backToLogin} />
      <BoxLogin isLogin={isLogin}>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>
            <h1>Login</h1>
          </span>

          <Input
            placeHolder="E-mail"
            name="login"
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
            name="loginPassword"
            type="password"
            validate={{
              required: true,
            }}
          />
          <footer>
            <button type="submit"> Sign In </button>
            <button type="button" onClick={() => setIsLogin(false)}>
              {' '}
              Sign Up{' '}
            </button>
          </footer>
        </form>
        <footer></footer>
      </BoxLogin>
    </Container>
  );
};

export default Login;
