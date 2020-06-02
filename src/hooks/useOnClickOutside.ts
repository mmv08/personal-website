import * as React from "react"

type ElementType = HTMLElement | SVGElement
type Target = ElementType | null

const hasClass = (element: ElementType, className: string): boolean => {
  if (!element) {
    return false
  }

  let elementToCheck = element
  if (element instanceof SVGElement && element.correspondingElement) {
    elementToCheck = element.correspondingElement
  }

  return elementToCheck.classList.contains(className)
}

const isInIgnoredElement = (element: Target, ignoredClass: string): boolean => {
  if (!element) {
    return false
  }

  if (hasClass(element, ignoredClass)) {
    return true
  }

  return isInIgnoredElement(element.parentElement, ignoredClass)
}

const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: React.MouseEvent<HTMLElement> | TouchEvent | MouseEvent) => void,
  ignoredClassNames?: string[],
): void => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        ignoredClassNames &&
        ignoredClassNames.some((className) => isInIgnoredElement(event.target as HTMLElement, className))
      ) {
        return
      }

      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler, ignoredClassNames])
}

export { useOnClickOutside }
