import * as React from "react"
import styled from "styled-components"
import Layout from "components/Layout"

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
        <h1>HI</h1>
      </SAppContainer>
    </Layout>
  )
}

export default IndexPage
