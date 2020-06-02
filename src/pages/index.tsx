import * as React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import Layout from "components/Layout"
import PersonalCard from "components/PersonalCard"
import { ThemeMode } from "hooks/useDarkMode"

const Terminal = dynamic(import("../components/Terminal"), { ssr: false })

const SAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const IndexPage: React.FC<{ currentMode: ThemeMode }> = ({ currentMode }) => {
  const [userHasOpenedTerminal, setUserHasOpenedTerminal] = React.useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = React.useState(false)

  const toggleTerminal = React.useCallback(() => {
    if (!userHasOpenedTerminal) {
      setUserHasOpenedTerminal(true)
    }

    setIsTerminalOpen((prev) => !prev)
  }, [userHasOpenedTerminal])

  return (
    <Layout>
      <SAppContainer>
        <PersonalCard currentMode={currentMode} toggleTerminal={toggleTerminal} />
      </SAppContainer>
      {/* dirty trick to dynamically import terminal */}
      {userHasOpenedTerminal && <Terminal onClose={toggleTerminal} isOpen={isTerminalOpen} />}
    </Layout>
  )
}

export default IndexPage
