import React from 'react';
import Modules from '../Header/PzmModules';

import { Container } from './styles';

export interface IModuleSelectorProps{
  isActive: boolean;
}

const ModuleSelector: React.FC<IModuleSelectorProps> = ({isActive}) => {
  return (
  <Container isActive={isActive} >
    <div>
      <Modules onModal={true}/>
    </div>
  </Container>)
}

export default ModuleSelector;