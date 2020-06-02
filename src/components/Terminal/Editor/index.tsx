import * as React from "react"
import styled from "styled-components"
import CommandInput from "./CommandInput"
import TerminalOutput from "./TerminalOutput"
import { useTerminalEditor } from "./useTerminalEditor"
import { useScrollToBottom } from "hooks/useScrollToBottom"

const EditorContainer = styled.div`
  height: 95%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.terminalEditorBg};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 5px 8px;
  box-sizing: border-box;
  overflow-y: scroll;
`

const Editor: React.FC = () => {
  const endRef = React.useRef<HTMLDivElement>(null)
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
      handleCommandInput(event.target.value)
    },
    [handleCommandInput],
  )

  return (
    <EditorContainer>
      <TerminalOutput dangerouslySetInnerHTML={{ __html: `Type <b>help</b> for a list of available commands` }} />
      {history.map(({ command: terminalCommand, output, createdAt }) => (
        <React.Fragment key={createdAt}>
          <CommandInput value={terminalCommand} historical />
          <TerminalOutput dangerouslySetInnerHTML={{ __html: output }} />
        </React.Fragment>
      ))}
      <CommandInput value={currentInput} onChange={handleCommandInputChange} />
      <div ref={endRef} />
    </EditorContainer>
  )
}

export default Editor
