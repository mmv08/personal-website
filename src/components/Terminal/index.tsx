import React from "react"
import { useOnClickOutside } from "hooks/useOnClickOutside"
import Window from "./Window"
import Editor from "./Editor"

interface Props {
  onClose: () => void
  isOpen: boolean
}

const IGNORED_CLICK_CLASSNAMES = ["themeSwitcher", "terminalButton"]

const Terminal = ({ onClose, isOpen }: Props): React.ReactElement => {
  const terminalWindow = React.useRef<HTMLDivElement>(null)

  useOnClickOutside(terminalWindow, onClose, IGNORED_CLICK_CLASSNAMES)

  return (
    <Window onClose={onClose} isOpen={isOpen} windowRef={terminalWindow}>
      <Editor />
    </Window>
  )
}

export default Terminal
