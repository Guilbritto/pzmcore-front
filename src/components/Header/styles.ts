import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: ${props => props.theme.header.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index:1;
  position: fixed;
  box-shadow: 1px 1px 1px 1px ${props => props.theme.header.background};
`;
