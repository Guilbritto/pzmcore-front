import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import logo from '../../../assets/images/logoligthTheme.svg';

import {  useHistory, useLocation } from 'react-router-dom';
import { BoxLogin } from '../../Login/styles';
import { useUser } from '../../../hooks/UserContext';
import CheckCode from '../../../components/CheckCode';

const VerificationCode: React.FC = () => {
  const history = useHistory();
  const { forgotPasswordCheckCode} = useUser()
  const location = useLocation<{email:string, code: string}>()
  const [checkCode, setCheckCode] = useState('');

   const onSubmit = useCallback(
    async (data: any) => {
      data.preventDefault()
      const email = location.state?.email;
      const validate = await forgotPasswordCheckCode(email, checkCode.split(" ").join(''));
      if(validate){
        history.push('/forgot/redefine', {email: email, code: checkCode.split(" ").join('')})
      }
    },
    [checkCode, forgotPasswordCheckCode, history, location.state],
  );
    
  return <Container>
    <BoxLogin>
        <header>
          <img src={logo} alt="logo" />
        </header>
          <form name="teste" onSubmit={onSubmit}>
          <span>
              <h1>Verification Code</h1>
            </span>
            <CheckCode setValue={setCheckCode}/>
            <footer>
              <button type="submit"> Confirmation </button>
              <button id="signUp" type="button" onClick={() => history.push('/')}>
                Back to Login
              </button>
             
            </footer>

          </form>
        <footer>
        </footer>
      </BoxLogin>
  </Container>;
}

export default VerificationCode;