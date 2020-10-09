import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;
  input{
    width: 40px;
    height: 45px;
    font-size: 32px;
    text-align: center;
    caret-color: transparent;
    border-style: none;
    border: 2px solid ${props => props.theme.colors.dark};
    border-radius: 6px;
    
    & + input{
      margin-left: 5px;
    }
  } 
  input:focus{
    border: 2px solid ${props => props.theme.colors.primary};
  } 
`;

