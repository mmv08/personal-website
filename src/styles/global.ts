import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
       height: 100%;
       margin: 0px;
       padding: 0px;
       font-family: 'Montserrat', sans-serif;
       background-color: #f7fff7;
       color: #191818;
    }

    #root {
        height: 100%;
    }

    @media (prefers-color-scheme: dark) {
        body {
            background-color: #191818;
            color: #f7fff7;
        }
    }
`

export { GlobalStyle }
