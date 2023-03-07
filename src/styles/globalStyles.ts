import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: border-box;
    }

    body {
      font-family: 'Netflix Sans', sans-serif;
      background-color: var(--secondary);
    }

  :root {
    --primary: #E50914;
    --secondary: #141414;

    --text1: #fff;
    --text2: #aaa;
  }
`;
