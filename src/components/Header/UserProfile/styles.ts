import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const UserPhoto = styled.div`
  cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width:48px;
    height: 48px;
    &:hover{
      background: ${props => shade(0.2, props.theme.header.background)}
    }
    img {
      border-radius: 50%;
      height: 32px;
      width: 32px;
    }
`
