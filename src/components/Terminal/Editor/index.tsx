import * as React from "react"
import styled from "styled-components"
import CommandInput from "./CommandInput"
import TerminalOutput from "./TerminalOutput"

interface Props {
  onClose: () => void
  isOpen: boolean
}

const EditorContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eaeaea;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 5px 8px;
  box-sizing: border-box;
`

const Editor: React.FC<Props> = () => {
  const [command, setCommand] = React.useState("")

  const handleCommandInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value)
  }, [])

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", (event) => {})
    }
  }, [])

  return (
    <EditorContainer>
      <TerminalOutput>
        Type <b>help</b> for a list of available commands
      </TerminalOutput>
      <CommandInput value={command} onChange={handleCommandInputChange} />
    </EditorContainer>
  )
}

export default Editor
