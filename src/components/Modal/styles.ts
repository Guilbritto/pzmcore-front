import styled, { css } from 'styled-components';

interface ModalStyledProps {
  visible: boolean;
}
export const Container = styled.div<ModalStyledProps>`
  left: 0;
  width: 0;
  top: 0;
  display: block;
  position: fixed;
  z-index: 0;
  overflow: auto;
  transition: width 1s linear;
  background: ${props =>
    props.visible &&
    css`
      width: 596px;
      padding: 40px 20px;
    `};
`;
