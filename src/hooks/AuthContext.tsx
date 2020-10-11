import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { LOGIN } from '../utils/urls';
import { useToast } from './ToastContext';

export interface AuthContextData {
  signIn(email: string, password: string): Promise<boolean>;
  signOut(): void;
  user: any;
}

export interface AuthState {
  token: string;
  user: object;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@pzmcore:token');
    const user = localStorage.getItem('@pzmcore:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    } else {
      return {} as AuthState;
    }
  });

  const { addToast } = useToast();

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const response = await api.post(LOGIN, { email, password });
      const { token, user } = response.data;

      localStorage.setItem('@pzmcore:token', token);
      localStorage.setItem('@pzmcore:user', JSON.stringify(user));
      setData({...data, user: user})
      return true;
    } catch (err) {
      addToast({
        type: err.response.data.status,
        title: 'Login Error',
        description: err.response.data.message,
      });
      return false;
    }
  }, [addToast , data]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@pzmcore:token');
    localStorage.removeItem('@pzmcore:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}{' '}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth must be used into a AuthContext');
  }

  return context;
}

export { AuthProvider, useAuth };
