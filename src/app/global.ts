'use client'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Defina aqui seus estilos globais */
  header{
    background: red;
    height:110px;
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}
main{
  height: 100vh;

}

`;
