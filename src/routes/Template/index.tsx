import React from 'react';
import AsideMenu from '../../components/AsideMenu';
import Header from '../../components/Header';
import ModuleSelector from '../../components/ModuleSelector';
import { useModule } from '../../hooks/ModuleModalContext';

import { Container, Main } from './styles';

const Template: React.FC = ({children}) => {
  const {isActive } = useModule();
  return <Container>
    <ModuleSelector isActive={isActive} />
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
