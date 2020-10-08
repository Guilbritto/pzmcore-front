import React, { createContext, useCallback, useContext } from 'react';
import api from '../services/api';
import { SIGNUP } from '../utils/urls';
import { useToast } from './ToastContext';


interface UserSignUpProps {
  name: string;
  email: string;
  password: string;
}

interface UserContextData {
  signUp(data: UserSignUpProps): Promise<void>
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
  


  return (
  <UserContext.Provider value={{signUp}}>
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