import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: border-box;

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: var(--secondary); 
      }
      
      ::-webkit-scrollbar-thumb {
        background: #888; 
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
    }

    body {
      font-family: 'Netflix Sans', sans-serif;
      background-color: var(--secondary);
      color: var(--text1);
    }

    a {
      text-decoration: none;
    }

  :root {
    --primary: #E50914;
    --secondary: #141414;

    --text1: #fff;
    --text2: #aaa;
  }
`;
