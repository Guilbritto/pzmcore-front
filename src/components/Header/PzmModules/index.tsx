import React from 'react';
import {BsList} from 'react-icons/bs'
import { Container } from './styles';

const Modules: React.FC = () => {
  return (
    <Container>
      <div>
        <BsList size={32} />
      </div>
      <span>PZM admin</span>
    </Container>

  )
}

export default Modules;