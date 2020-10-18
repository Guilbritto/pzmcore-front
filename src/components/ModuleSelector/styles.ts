import styled, { css } from 'styled-components';
import { IModuleSelectorProps } from '.';


export const Container = styled.div<IModuleSelectorProps>`
  width:0px;
  height: 0%;
  transition: width .3s linear, height .3s linear;
  ${props => props.isActive && css`
    width:320px;
    height: 100%;
    background: #FFF;
    left:0;
    position:absolute;
    z-index:2;
    div{
      background: #eee;
    }
  `}
`;
