import { darken } from 'polished';
import styled, {  keyframes } from 'styled-components';
import LoginImage from '../../assets/images/homepageImage.jpg';

export const Container = styled.div`
  height: 100vh;
  background-image: url(${LoginImage});
  background-size: cover;
`;

const appearsFromRight = keyframes`
  from{
    opacity 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    tansform: translateX(0)
  }
`;
export const BoxLogin = styled.aside`
  animation: ${appearsFromRight} 1s;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${props => props.theme.colors.background};
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s ease;
  width: 500px;
  padding: 30px;

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
        border-style: none;
        margin-top: 20px;
      }
      button[type='submit']:hover {
        background: ${props => darken(0.03, props.theme.colors.primary)};
      }
      button[type='button']:hover {
        background: ${props => darken(0.03, props.theme.colors.background)};
      }

      button[id="signUp"]{
        border: 2px solid ${props => props.theme.colors.primary};
        background: transparent;
        color: ${props => props.theme.colors.primary};
      }
      div{
        display: flex;
        width: 100%;
        justify-content: flex-end;

        a{
          text-decoration: none;
          color: ${props => props.theme.colors.primary}
        }
      }
    }
  }
`;
