import * as React from "react"
import styled from "styled-components"

interface Props {
  value: string
  historical?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Arrow = styled.span`
  color: ${({ theme }) => theme.colors.linkHover};
  font-weight: 700;
`

const Input = styled.input`
  background: transparent;
  outline: none;
  border: none;
  font-size: 14px;
  font-family: "Source Code Pro", monospace;
  margin-left: 5px;
`
// https://stackoverflow.com/questions/45583088/move-to-new-line-when-input-field-width-exceeds

const CommandInput: React.FC<Props> = ({ value, historical = false, onChange }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const focusInput = React.useCallback(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <Arrow>→</Arrow>
      {historical ? (
        <span>{value}</span>
      ) : (
        <Input autoFocus onBlur={focusInput} ref={inputRef} value={value} onChange={onChange} />
      )}
    </>
  )
}

export default CommandInput
