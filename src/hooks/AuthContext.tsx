import React, { createContext, useCallback, useContext } from 'react';

export interface AuthContextData {
  signIn(email: string, password: string): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback((email: string, password: string) => {
    console.log('logando na aplicação');
  }, []);

  const logout = useCallback(() => {
    console.log('deslogando da aplicação');
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, logout }}>
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
