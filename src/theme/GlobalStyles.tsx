import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Martian Mono', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  & * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  & button {
    color: currentColor;
    border: none;
    cursor: pointer;
    background: transparent;
  }
  
  & input {
    outline: none;
    border: none;
    background: transparent;
  }
`;
