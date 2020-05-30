import { Theme } from "./theme"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
       min-height: 100vh;
       min-height: -webkit-fill-available;
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
