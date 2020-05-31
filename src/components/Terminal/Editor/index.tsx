import * as React from "react"
import styled from "styled-components"
import CommandInput from "./CommandInput"
import TerminalOutput from "./TerminalOutput"
import { useTerminalEditor } from "./useTerminalEditor"
import { useScrollToBottom } from "hooks/useScrollToBottom"

const EditorContainer = styled.div`
  height: 259px;
  width: 100%;
  background-color: #eaeaea;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 5px 8px;
  box-sizing: border-box;
  overflow-y: scroll;
`

const Editor: React.FC = () => {
  const endRef = React.useRef()
  const { history, currentInput, handleCommandInput, handleCommandSubmit } = useTerminalEditor()
  useScrollToBottom(endRef, history)

  React.useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.keyCode === 13) {
        handleCommandSubmit()
      }
    }

    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [handleCommandSubmit])

  const handleCommandInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)
      handleCommandInput(event.target.value)
    },
    [handleCommandInput],
  )

  return (
    <EditorContainer>
      <TerminalOutput>
        Type <b>help</b> for a list of available commands
      </TerminalOutput>
      {history.map(({ command: terminalCommand, output }) => (
        <>
          <CommandInput value={terminalCommand} historical />
          <TerminalOutput>{output}</TerminalOutput>
        </>
      ))}
      <CommandInput value={currentInput} onChange={handleCommandInputChange} />
      <div ref={endRef} />
    </EditorContainer>
  )
}

export default Editor
