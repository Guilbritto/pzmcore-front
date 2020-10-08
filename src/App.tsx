import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import themeDefault from './assets/styles/themes/default';
import AppProvider from './hooks';

function App() {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={themeDefault}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
