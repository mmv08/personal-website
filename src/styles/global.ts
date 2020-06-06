import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body, #__next { height: 100% } 

  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    color: ${({ theme }) => theme.colors.primary};
  }

  #root {
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
    }
  }
`

export { GlobalStyle }
