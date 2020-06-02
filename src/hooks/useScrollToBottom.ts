import * as React from "react"

const useScrollToBottom = (ref: React.MutableRefObject<HTMLElement | null>, dep: unknown): void => {
  React.useEffect(() => {
    const scrollToBottom = () => {
      if (!ref.current) {
        return
      }
      ref.current.scrollIntoView({ behavior: "smooth" })
    }

    scrollToBottom()
  }, [ref, dep])
}

export { useScrollToBottom }
