import * as React from "react"

// To use only in client-side rendered components
const useMediaQuery = (mediaQuery: string): boolean => {
  const [isVerified, setIsVerified] = React.useState(!!window.matchMedia(mediaQuery).matches)

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches)

    mediaQueryList.addListener(documentChangeHandler)

    documentChangeHandler()
    return () => {
      mediaQueryList.removeListener(documentChangeHandler)
    }
  }, [mediaQuery])

  return isVerified
}

export { useMediaQuery }
