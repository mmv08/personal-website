import * as React from "react"
import styled from "styled-components"
import Window from "./Window"

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
`

const Terminal: React.FC<Props> = ({ onClose, isOpen }) => (
  <Window onClose={onClose} isOpen={isOpen}>
    <EditorContainer />
  </Window>
)

export default Terminal
