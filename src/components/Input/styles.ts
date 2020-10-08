import styled, { css } from 'styled-components';
import { darken } from 'polished';
interface InputStyleProps {
  filled: boolean;
  setError: boolean;
}

export const Container = styled.div<InputStyleProps>`
  width: 100%;
  margin-top: 20px;

  .form {
    width: 100%;
    position: relative;
    height: 50px;
    overflow: hidden;
  }

  .form input {
    width: 100%;
    height: 100%;
    color: gray;
    padding-top: 20px;
    border: none;
    background: transparent;
  }
  .form label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid;
  }

  .form label::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid
      ${(props: { setError: boolean; theme: any }) =>
        props.setError ? props.theme.colors.error : props.theme.colors.primary};
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    color: gray;
  }

  .form input:focus + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 14px;
    color: ${(props: { setError: boolean; theme: any }) =>
      props.setError ? props.theme.colors.error : props.theme.colors.primary};
    font-weight: 500;
  }

  ${props =>
    props.filled &&
    css`
      .form input:focus + .label-name .content-name,
      .form input:valid + .label-name .content-name {
        transform: translateY(-150%);
        font-size: 14px;
        font-weight: 500;
      }
      .form input:focus + .label-name::after,
      .form input:valid + .label-name::after {
        transform: translateX(0%);
      }
    `}

  .form input:focus + .label-name::after {
    transform: translateX(0%);
  }
  .errorMessage {
    color: ${props => props.theme.colors.error};
  }
`;
