import styled from 'styled-components';
import {shade} from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  div {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.header.color};
    &:hover{
      background: ${props => shade(0.2, props.theme.header.background)}
    }
  }
  span{
    margin-left: 6px;
    font-size: 18px;
    color: ${props => props.theme.header.color};
    font-weight: 500;
    
  }

  
`
