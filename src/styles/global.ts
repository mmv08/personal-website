import { Theme } from "./theme"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body, #__next { height: 100% } 

  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.primaryBg};
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }

  #root {
    height: 100%;
  }
`

export { GlobalStyle }
