import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/api';
import { FORGOT_PASSWORD, FORGOT_PASSWORD_CHANGE, FORGOT_PASSWORD_VALIDATE, SIGNUP } from '../utils/urls';
import { useToast } from './ToastContext';


interface UserSignUpProps {
  name: string;
  email: string;
  password: string;
}

interface IChangePasswordRequest{
  old: string;
  new: string;
}
interface UserContextData {
  signUp(data: UserSignUpProps): Promise<void>
  forgotPassword(email: string): Promise<void>
  forgotPasswordCheckCode(email:string, code:string): Promise<boolean>
  forgotChangePassword(email:string, password: IChangePasswordRequest, code: string): Promise<boolean>
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({children}) => {
  const {addToast} = useToast()

  const signUp = useCallback(async ({name, email, password}: UserSignUpProps)=> {
    try{
      console.log('cheguei aqui')
      const response = await api.post(SIGNUP, {name, email, password})
      addToast({
        title: 'User Created',
        type: 'success'
      })
    }catch(err){
      addToast({
        title: 'Error',
        type: err.response.data.status,
        description: err.response.data.message
      })
      console.log(err.response)
    }
    }, [])
  
  const forgotPassword = useCallback(async (email: string) => {
    try{

      const response = await api.post(FORGOT_PASSWORD, {email}) 
      console.log(response);
      addToast({
        title: 'Confirmation sended',
        description: 'Sended to yout email a confirmation code. Please check your email!',
        type: 'success'        
      })
    }catch(err){
      addToast({
        title: 'Error',
        description: err.response.data.message,
        type: 'error',
      })
    }
    
  },[])

  const forgotPasswordCheckCode = useCallback(async (email: string, code: string) => {
    try{
      const response = await api.post(FORGOT_PASSWORD_VALIDATE, {email, code});
      return response.data.validate;
    }catch(err){
      addToast({
        title: 'Error',
        description: err.response.data.message,
        type: 'error',
      })
      return false;
    }
  },[])

  const forgotChangePassword = useCallback(async (email: string, password :IChangePasswordRequest, code: string) => {
    try{
      const response = await api.patch(FORGOT_PASSWORD_CHANGE, {email, password, code});
      return true;
    }catch(err){
      addToast({
        title: 'Error',
        description: err.response.data.message,
        type: 'error',
      })
      return false;
    }
  },[])
  return (
  <UserContext.Provider value={{signUp, forgotPassword, forgotPasswordCheckCode, forgotChangePassword}}>
    {children}
  </UserContext.Provider>
  )
}

function useUser(){
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used into a UserProvider!');
  }

  return context;
}
export {useUser, UserProvider}