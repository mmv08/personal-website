import * as React from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import PersonalCard from "components/PersonalCard"

const SAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SAppContainer>
        <PersonalCard />
      </SAppContainer>
    </Layout>
  )
}

export default IndexPage
