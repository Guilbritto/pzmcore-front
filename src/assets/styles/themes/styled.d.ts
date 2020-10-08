import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      dark: string;
      background: string;
      text: string;
      error: string;
    };
  }
}
