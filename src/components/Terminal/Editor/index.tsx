import * as React from "react"
import styled from "styled-components"
import CommandInput from "./CommandInput"
import TerminalOutput from "./TerminalOutput"
import { useTerminalEditor } from "./useTerminalEditor"

const EditorContainer = styled.div`
  height: 259px;
  width: 100%;
  background-color: #eaeaea;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 5px 8px;
  box-sizing: border-box;
`

const Editor: React.FC = () => {
  const { history, currentInput, handleCommandInput, handleCommandSubmit } = useTerminalEditor()

  React.useEffect(() => {
    const listener = (event: React.KeyboardEvent<HTMLElement>) => {
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
    </EditorContainer>
  )
}

export default Editor
