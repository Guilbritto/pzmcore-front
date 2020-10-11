import React from 'react';
import { IToastMesage } from '../../hooks/ToastContext';
import { Container } from './styles';
import Toast from './Toast';

import { useTransition } from 'react-spring';

interface IToastContainerStyleProps {
  messages: IToastMesage[];
}
const ToastContainer: React.FC<IToastContainerStyleProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container hasToast={messagesWithTransitions.length > 0}> 
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
