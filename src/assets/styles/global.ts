import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button{
    font-family: 'Roboto Slab', serif;
  }

  button{
    cursor: pointer;
  }
`;
