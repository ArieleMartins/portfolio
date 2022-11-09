import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: #111018;
    color:white;
  }
  /* NextJS */
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  .cabecalho, .container-sobre, .container-formacao, .container-desc-links{
    background-color: #111018;
    border: 2px solid #312F34;
    border-radius: 20px;
    
  } 
`;