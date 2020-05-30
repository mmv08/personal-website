import * as React from "react"
import styled from "styled-components"
import { Wave } from "./Wave"

const Animoji = styled.img`
  width: 200px;
  height: 200px;
`

const PersonalCard = () => (
  <div style={{ textAlign: "center" }}>
    <Animoji src="/animoji.png" alt="Animoji" />
    <p>
      Hello{" "}
      <Wave role="img" aria-label="waving-hand">
        👋
      </Wave>
      <br />
      I'm <b>Mikhail</b>, Frontend Engineer at{" "}
      <a href="https://gnosis.io" target="_blank" rel="noopener noreferrer">
        Gnosis
      </a>
    </p>
  </div>
)

export default PersonalCard
