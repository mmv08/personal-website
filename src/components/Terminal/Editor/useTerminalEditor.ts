import { useReducer, useMemo, useCallback } from "react"

interface TerminalHistoryEntry {
  command: string
  output: string
}

interface State {
  currentInput: string
  history: TerminalHistoryEntry[]
}

const initialState: State = { currentInput: "", history: [] }

const COMMAND_CHANGE = "COMMAND_CHANGE"
const COMMAND_SUBMIT = "COMMAND_SUBMIT"

function reducer(state: State, action) {
  switch (action.type) {
    case COMMAND_CHANGE:
      return { ...state, currentInput: action.payload.value }
    case COMMAND_SUBMIT:
      return {
        ...state,
        currentInput: "",
        history: [...state.history, { command: state.currentInput, output: action.payload.output }],
      }
    default:
      return state
  }
}

export const useTerminalEditor = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const history = useMemo(() => state.history, [state])
  const currentInput = useMemo(() => state.currentInput, [state])
  const handleCommandInput = useCallback((value) => dispatch({ type: COMMAND_CHANGE, payload: { value } }), [])
  const handleCommandSubmit = useCallback(() => dispatch({ type: COMMAND_SUBMIT, payload: { output } }), [dispatch])

  return {
    history,
    currentInput,
    handleCommandInput,
    handleCommandSubmit,
  }
}
