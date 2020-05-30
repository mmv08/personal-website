import * as React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "styles/global"
import { useDarkMode } from "hooks/useDarkMode"
import { lightTheme, darkTheme } from "styles/theme"
import ThemeSwitcher from "components/ThemeSwitcher"

interface GlobalAppProps {
  Component: React.ElementType
  pageProps: Record<string, unknown>
}

const MyApp: React.FC<GlobalAppProps> = ({ Component, pageProps }) => {
  const [theme, themeToggler, mounted] = useDarkMode()

  const themeObj = theme === "dark" ? darkTheme : lightTheme

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      <ThemeSwitcher currentMode={theme} onClick={themeToggler} />
      <Component {...pageProps} currentMode={theme} />
    </ThemeProvider>
  )
}

export default MyApp
