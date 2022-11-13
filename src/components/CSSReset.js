import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap');
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    //background-color: #111018;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.fontColor};
    transition: background 1s;
    font-family: 'Merriweather Sans', sans-serif;
  }
  /* NextJS */
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    
  }
  .cabecalho, .container-sobre, .container-formacao, .container-desc-links{
    background-color: ${({theme}) => theme.backgroundContainer};
    border: 2px solid #312F34;
    border-radius: 20px;
    
  } 

  @media(max-width:1325px){
    .container-formacao, .container-sobre{
        display: none;
    }

    body{
        padding: 0;
    }
  }
`;