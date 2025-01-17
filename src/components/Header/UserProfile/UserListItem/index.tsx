import React from 'react';
import { useAuth } from '../../../../hooks/AuthContext';

import { Container } from './styles';

const UserListItem: React.FC = () => {
  const {signOut, user } = useAuth()
  
  const handleClick = () => {
    signOut();
  }

  return <Container>

     <img src={user.avatar} 
      alt="user"/>
    <div>
      <h3>{user.name}</h3>
      <span>{user.email}</span>
      <ul>
        <li>
          <span className='link-sair' onClick={handleClick}> Sair </span>
        </li>
      </ul>

    </div>
  </Container>;
}

export default UserListItem;