import { useState, useEffect, useCallback } from "react"

export type ThemeMode = "light" | "dark"

const useDarkMode = (): [ThemeMode, () => void, boolean] => {
  const [theme, setTheme] = useState<ThemeMode>("light")
  const [mounted, setMounted] = useState(false)

  const themeToggler = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }, [])

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme as ThemeMode)
    setMounted(true)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])
  return [theme, themeToggler, mounted]
}

export { useDarkMode }
