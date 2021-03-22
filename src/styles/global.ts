import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --shape: #fff;

    --red: #e62e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --green: #33cc95;
    
    --text-title: #363f5f;
    --text-body: #969cb3
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html { 
    @media (max-width:1080px) {
      font-size: 93.75%
    }
    @media (max-width:1080px) {
      font-size: 87.5%
    }
  }

  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
