import styled, { css } from 'styled-components';
import {darken, shade} from 'polished'
import { IModulesProps } from '.';

export const Container = styled.div<IModulesProps>`
  display: flex;
  align-items: center;
  
  div {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${props => props.onModal && css`
      color: #5D5D5B;
      &:hover{
        background: ${darken(0.1, '#FFF')}
      } 
    `}

    ${props => !props.onModal && css`
      color: ${props => props.theme.header.color};
      &:hover{
        background: ${props => shade(0.2, props.theme.header.background)}
      } 
    `}
  }
  
  span{
    margin-left: 6px;
    font-size: 18px;
    color: ${props => props.theme.header.color};
    font-weight: 500;
    
  }

  
`
