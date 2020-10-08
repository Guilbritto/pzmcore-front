import React, { createContext, useCallback, useContext, useState } from 'react';
import { flattenDiagnosticMessageText } from 'typescript';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<IToastMesage, 'id'>): void;
  removeToast(id: string): void;
}

export interface IToastMesage {
  id: string;
  type?: 'success' | 'info' | 'error';
  title: string;
  description?: string;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMesage[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<IToastMesage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        title,
        description,
        type,
      };
      setMessages(old => [...old, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used into a ToastProvider!');
  }

  return context;
}

export { ToastProvider, useToast };
