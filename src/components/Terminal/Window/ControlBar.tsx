import * as React from "react"
import styled from "styled-components"

interface Props {
  onClose: (event: React.MouseEvent<HTMLElement>) => void
}

export const CONTROL_BAR_HEIGHT = "21px"

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.terminalControlBarBg};
  padding: 3px 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: ${CONTROL_BAR_HEIGHT};
  box-sizing: border-box;
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

const ControlBar: React.FC<Props> = ({ onClose }) => (
  <Container>
    <CloseBtn onClick={onClose} />
    <SessionInfo>guest@mikheevm.com: ~</SessionInfo>
  </Container>
)

export default ControlBar
