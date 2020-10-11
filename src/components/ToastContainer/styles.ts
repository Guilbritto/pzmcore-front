import styled from 'styled-components';

interface IToastStyleProps{
  hasToast: boolean;
}
export const Container = styled.div<IToastStyleProps>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  z-index:0;
  overflow: hidden;
`;
