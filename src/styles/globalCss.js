import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #00c2bd;
    --secondary: #000;
    --lightGrey: whitesmoke;
    --midGrey: #cacaca;
    --darkGrey: #272727;
    --danger: #ff3d3d;
    --font-primary: 'Open Sans', sans-serif;
    --font-system: system-ui; /* postcssPresetEnv */
    --borderRadius: 3px;
  }
  
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px var(--grey);
    box-shadow: inset 0 0 3px var(--grey);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
  }
  
  ::selection {
    background: rgba(0, 194, 189, 0.6);
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-height: 100%;
    background: var(--lightGrey);
  }
  
  body {
    font-family: var(--font-system);
    min-height: 100%;
    position: relative;
    background: white;
    color: var(--secondary);
    font-size: 1.6em;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    color: var(--primary);
    box-shadow: 0px !important;
  }
  
  strong {
    font-weight: 600;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1em;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-bottom: 0.5em;
  }
  
  
  blockquote {
    margin-left: 0;
    padding-left: 1em;
    line-height: 1.1;
    font-size: 1em;
    font-style: italic;
    border-left: 2px solid var(--primary);
  }
  
  /* Utility Classes */
  .light {
    background-color: var(--lightGrey);
  }
  .white {
    background-color: white;
  }
  .dark {
    background-color: var(--primary);
    color: white;
  }
  .dark h1,
  .dark h2,
  .dark h3,
  .dark h4,
  .dark h5,
  .dark h6 {
    color: white;
  }
  
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .taCenter {
    text-align: center;
  }
  .taLeft {
    text-align: left;
  }
  .taRight {
    text-align: right;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }
  
  /* Layout */
  
  .section {
    width: 100%;
    padding: 2rem 0; /*5rem 0*/
    border-bottom: 1px solid #f1f1f1;
  }
  .section:last-child {
    border: 0;
  }
  .section.thick {
    padding: 10rem 0;
  }
  .section.thin {
    padding: 2rem 0; /*3.5rem 0*/
  }
  .section.noPadding {
    padding: 0;
  }
  
  @media (max-width: 600px) {
    .section {
      width: 100%;
      padding: 5rem 0;
    }
    .section.thick {
      padding: 7rem 0;
    }
    .section.thin {
      padding: 1.5rem 0;
    }
  }
  
  .container {
    max-width: 1111px;
    width: 90%;
    margin: 0 auto;
  }
  .container.skinny {
    max-width: 888px;
  }
  .container.skinnier {
    max-width: 555px;
  }
  
  /* Buttons */
  
  .Button {
    background: var(--primary);
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.05em;
    font-size: 1.4rem;
    display: inline-block;
    padding: 1.25rem 3rem;
    border: none;
    transition: all 0.2s ease;
    cursor: pointer;
    border-radius: var(--borderRadius);
  }
  .Button:hover,
  .Button:focus {
    opacity: 0.95;
    outline: none;
  }
  .Button[disabled] {
    opacity: 0.4;
    pointer-events: none;
    cursor: progress;
  }
  .Button-blank {
    appearance: none;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;

// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #000;
//     color: #fff;
//   }
// `;

export default GlobalStyle;