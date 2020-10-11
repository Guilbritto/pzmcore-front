import styled from 'styled-components';

interface IAsideStyleProps{
  isActive?: boolean;
}
export const Container = styled.div<IAsideStyleProps>`

  width: ${props => props.isActive ? '400px' : '0px'};
  transition: width .5s ease;
  overflow: hidden;
  margin:0;
  box-shadow: 0 1px 2px rgba(0,0,0,.3);
  margin-top: 48px;
`;


export const MenuHeader = styled.div`
  padding: 16px 10px;
  h1{
    font-size: 18px;
  }

`

export const MenuList = styled.div`

`