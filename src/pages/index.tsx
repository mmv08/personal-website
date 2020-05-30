import * as React from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import PersonalCard from "components/PersonalCard"

const SAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const IndexPage = () => {
  return (
    <Layout>
      <SAppContainer>
        <PersonalCard />
      </SAppContainer>
    </Layout>
  )
}

export default IndexPage
