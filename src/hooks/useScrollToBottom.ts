import { useEffect } from "react"

const useScrollToBottom = (ref, dep) => {
  useEffect(() => {
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
