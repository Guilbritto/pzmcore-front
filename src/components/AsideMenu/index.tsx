import React from 'react';
import { useAside } from '../../hooks/AsideMenuContext';

import { Container, MenuHeader, MenuList } from './styles';


const AsideMenu: React.FC = ({children}) => {
  const {isActive, listItems, title} = useAside()

  return (
  <Container isActive={isActive} >
    <MenuHeader>

      <h1>{title}</h1>
    </MenuHeader>
    <MenuList >
      {listItems}
    </MenuList>
  </Container>
  )
}

export default AsideMenu;