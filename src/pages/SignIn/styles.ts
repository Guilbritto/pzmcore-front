import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { SwitchLoginProsp } from '../Login/styles';

export const BoxSignIn = styled.aside<SwitchLoginProsp>`
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: ${props => props.theme.colors.background};
  position: fixed;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s ease;
  ${props =>
    !props.isLogin &&
    css`
      width: 500px;
      padding: 30px;
    `}

  header {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    img {
      height: 50px;
    }
  }
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    span {
      align-items: flex-start;
      color: gray;
      width: 100%;
    }

    footer {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      button {
        width: 100%;
        height: 40px;
        color: #fff;
        margin: 16px 0;
        background: ${props => props.theme.colors.primary};
        border-radius: 22px;
        font-size: 14px;
        font-weight: 500;
        transition: background 0.3s ease;
        border-style: none;
        margin-top: 20px;
      }
      button[type='submit']:hover {
        background: ${props => darken(0.03, props.theme.colors.primary)};
      }
      button[type='button']:hover {
        background: ${props => darken(0.03, props.theme.colors.background)};
      }

      button:last-child {
        border: 2px solid ${props => props.theme.colors.primary};
        background: transparent;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;
