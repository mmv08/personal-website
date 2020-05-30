import * as React from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import PersonalCard from "components/PersonalCard"
import Terminal from "components/Terminal"
import { ThemeMode } from "hooks/useDarkMode"

const SAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const IndexPage: React.FC<{ currentMode: ThemeMode }> = ({ currentMode }) => {
  const [isTerminalOpen, setIsTerminalOpen] = React.useState(false)

  const toggleTerminal = React.useCallback(() => {
    setIsTerminalOpen((prev) => !prev)
  }, [])

  return (
    <Layout>
      <SAppContainer>
        <PersonalCard currentMode={currentMode} toggleTerminal={toggleTerminal} />
      </SAppContainer>
      <Terminal onClose={toggleTerminal} isOpen={isTerminalOpen} />
    </Layout>
  )
}

export default IndexPage
