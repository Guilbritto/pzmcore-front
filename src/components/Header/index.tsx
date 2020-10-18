import React from 'react';
import Modules from './PzmModules';

import { Container } from './styles';
import UserProfile from './UserProfile';

const Header: React.FC = () => {
  
  return <Container >
    <Modules onModal={false} />
    <UserProfile />
  </Container>;
}

export default Header;