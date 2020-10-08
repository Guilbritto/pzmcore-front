import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from './styles';

export interface ModalProps {
  children?: any;
  visible: boolean;
  setModal(value: boolean): void;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  children,
  setModal,
}: ModalProps) => {
  return ReactDOM.createPortal(
    <Container visible={visible}>{children}</Container>,
    document.body,
  );
};

export default Modal;
