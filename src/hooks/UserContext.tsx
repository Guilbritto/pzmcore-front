import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/api';
import { FORGOT_PASSWORD, SIGNUP } from '../utils/urls';
import { useToast } from './ToastContext';


interface UserSignUpProps {
  name: string;
  email: string;
  password: string;
}

interface UserContextData {
  signUp(data: UserSignUpProps): Promise<void>
  forgotPassword(email: string): Promise<void>
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
        type: err.response.data.type,
      })
    }
    
  },[])


  return (
  <UserContext.Provider value={{signUp, forgotPassword}}>
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