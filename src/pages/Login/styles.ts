import { darken } from 'polished';
import styled from 'styled-components';
import LoginImage from '../../assets/images/homepageImage.jpg';

export const Container = styled.div`
  height: 100vh;
  background-image: url(${LoginImage});
  background-size: cover;
`;

export const BoxLogin = styled.aside`
  right: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  background: ${props => props.theme.colors.background};
  position: fixed;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
    > input {
      background: ${props => props.theme.colors.secondary};
      border-style: none;
      width: 100%;
      height: 38px;
      border-radius: 22px;
      padding: 0 16px;
      margin: 16px 0;
      color: ${props => props.theme.colors.primary};
    }
    button {
      border-style: none;
    }
  }
`;
