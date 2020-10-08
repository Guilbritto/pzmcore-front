import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AuthProvider } from './AuthContext';

const AppProvider: React.FC = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <AuthProvider>{children} </AuthProvider>
    </FormProvider>
  );
};

export default AppProvider;
