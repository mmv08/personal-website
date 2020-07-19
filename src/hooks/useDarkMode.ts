import React from "react"

export type ThemeMode = "light" | "dark"

const useDarkMode = (): [ThemeMode, () => void, boolean] => {
  const [theme, setTheme] = React.useState<ThemeMode>("light")
  const [mounted, setMounted] = React.useState(false)

  const themeToggler = React.useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }, [])

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme as ThemeMode)
    setMounted(true)
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])
  return [theme, themeToggler, mounted]
}

export { useDarkMode }
