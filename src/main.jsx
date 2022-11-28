import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createGlobalStyle} from 'styled-components'



const GlobalStyle = createGlobalStyle`

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right,#69c0ff 0%,#b7eb8f 100%);
  font-size: 1.2rem;
  text-shadow: 0 3px 5px rgba(0,0,0,0.3);
}

*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Orbitron', sans-serif;
  text-decoration: none;
  list-style: none;
}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
)
