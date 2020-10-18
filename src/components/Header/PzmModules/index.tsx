import React from 'react';
import {BsList} from 'react-icons/bs'
import { useModule } from '../../../hooks/ModuleModalContext';
import {Container} from './styles'
export interface IModulesProps{
  onModal: boolean;
}
const Modules: React.FC<IModulesProps> = ({onModal}) => {

  const { setIsActive } = useModule()

  return (
    <Container onModal={onModal}>
      <div onClick={() => setIsActive((state:boolean) => !state)}>
        <BsList size={32} />
      </div>
      <span>PZM admin</span>
    </Container>
  )
}

export default Modules;