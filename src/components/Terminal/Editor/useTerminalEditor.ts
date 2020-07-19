import React from "react"
import { handleCommand } from "./commandHandler"

interface TerminalHistoryEntry {
  command: string
  output: string
  createdAt: number
}

type History = TerminalHistoryEntry[]

interface State {
  currentInput: string
  history: TerminalHistoryEntry[]
}

interface TerminalEditor {
  history: History
  currentInput: string
  handleCommandInput: (value: string) => void
  handleCommandSubmit: () => void
}

const initialState: State = { currentInput: "", history: [] }

const COMMAND_CHANGE = "COMMAND_CHANGE"
const COMMAND_SUBMIT = "COMMAND_SUBMIT"

interface Action {
  type: typeof COMMAND_SUBMIT | typeof COMMAND_CHANGE
  payload: Record<string, unknown>
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case COMMAND_CHANGE:
      return { ...state, currentInput: action.payload.value as string }
    case COMMAND_SUBMIT:
      return {
        ...state,
        currentInput: "",
        history: [
          ...state.history,
          { command: state.currentInput, output: action.payload.output, createdAt: Date.now() },
        ] as History,
      }
    default:
      return state
  }
}

export const useTerminalEditor = (): TerminalEditor => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const history: TerminalHistoryEntry[] = React.useMemo(() => state.history, [state])
  const currentInput = React.useMemo(() => state.currentInput, [state])
  const handleCommandInput = React.useCallback((value) => dispatch({ type: COMMAND_CHANGE, payload: { value } }), [])
  const handleCommandSubmit = React.useCallback(() => {
    const output = handleCommand(currentInput)

    dispatch({ type: COMMAND_SUBMIT, payload: { output } })
  }, [dispatch, currentInput])

  return {
    history,
    currentInput,
    handleCommandInput,
    handleCommandSubmit,
  }
}
