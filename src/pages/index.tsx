import * as React from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import PersonalCard from "components/PersonalCard"
import { ThemeMode } from "hooks/useDarkMode"

const SAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const IndexPage: React.FC<{ currentMode: ThemeMode }> = ({ currentMode }) => {
  return (
    <Layout>
      <SAppContainer>
        <PersonalCard currentMode={currentMode} />
      </SAppContainer>
    </Layout>
  )
}

export default IndexPage
