import React from 'react';
import AsideMenu from '../../components/AsideMenu';
import Header from '../../components/Header';

import { Container, Main } from './styles';

const Template: React.FC = ({children}) => {
  
  return <Container>
    <Header />
    <Main >
      {children}
{/* 
      <iframe 
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms" 
      src="https://www.pzmapp.com.br/honda/login.php">

      </iframe> */}
    </Main>
    <AsideMenu />
    </Container>;
};

export default Template;
