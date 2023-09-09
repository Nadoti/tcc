"use client"
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  } */

  /* HTML: <div class="loader"></div> */
  /* .loader {
    width: 120px;
    height: 20px;
    border-radius: 20px;
    background:
    linear-gradient(orange 0 0) 0/0% no-repeat
    lightblue;
    animation: l2 2s infinite steps(10);
  }
  @keyframes l2 {
      100% {background-size:110%}
  } */

  /* HTML: <div class="loader"></div> */

`
