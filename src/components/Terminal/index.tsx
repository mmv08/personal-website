import * as React from "react"
import styled from "styled-components"
import Window from "./Window"
import Editor from "./Editor"
import { useOnClickOutside } from "hooks/useOnClickOutside"

interface Props {
  onClose: () => void
  isOpen: boolean
}

const Terminal: React.FC<Props> = ({ onClose, isOpen }) => {
  const terminalWindow = React.useRef(null)

  useOnClickOutside(terminalWindow, onClose)

  return (
    <Window onClose={onClose} isOpen={isOpen} windowRef={terminalWindow}>
      <Editor />
    </Window>
  )
}

export default Terminal
