import * as React from "react"
import styled, { css } from "styled-components"
import { useMediaQuery } from "hooks/useMediaQuery"

const ARROW_WIDTH = "10px"
const INPUT_LEFT_MARGIN = "5px"

const sharedCommandStyles = css`
  font-size: 14px;
  font-family: "Source Code Pro", monospace;
  margin-left: ${INPUT_LEFT_MARGIN};
  color: ${({ theme }) => theme.colors.primary};
`

interface InputBasics {
  value: string
}

interface HistoricalInput extends InputBasics {
  historical: true
  onChange?: undefined
}

interface Input extends InputBasics {
  historical?: false | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Arrow = styled.span`
  color: ${({ theme }) => theme.colors.linkHover};
  font-weight: 700;
  width: ${ARROW_WIDTH};
`

const HistoricalCommand = styled.span`
  ${sharedCommandStyles};
`

const Input = styled.input`
  ${sharedCommandStyles};

  background: transparent;
  outline: none;
  border: none;
  width: calc(100% - ${INPUT_LEFT_MARGIN} - ${ARROW_WIDTH} - 30px);
`

const CommandInput: React.FC<Input | HistoricalInput> = ({ value, historical = false, onChange }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const isSmallScreen = useMediaQuery("(max-width: 600px)")

  const focusInput = React.useCallback(() => {
    if (inputRef?.current && !isSmallScreen) {
      inputRef.current.focus()
    }
  }, [isSmallScreen])

  return (
    <>
      <Arrow>→</Arrow>
      {historical ? (
        <HistoricalCommand>{value}</HistoricalCommand>
      ) : (
        <Input autoFocus onBlur={focusInput} ref={inputRef} value={value} onChange={onChange} autoComplete="off" />
      )}
    </>
  )
}

export default CommandInput
