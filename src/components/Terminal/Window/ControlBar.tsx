import * as React from "react"
import styled from "styled-components"

interface Props {
  onClose: () => void
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #c9cacf;
  padding: 3px 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const CloseBtn = styled.button`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  padding: 0;
  border: 0;
`

const SessionInfo = styled.p`
  margin: 0 auto;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
`

const ControlBar: React.FC<Props> = ({ onClose }) => {
  return (
    <Container>
      <CloseBtn onClick={onClose} />
      <SessionInfo>guest@mikheevm.com</SessionInfo>
    </Container>
  )
}

export default ControlBar
