import * as React from "react"
import { Wave } from "./Wave"

const PersonalCard = () => (
  <div style={{ textAlign: "center" }}>
    <img src="/animoji.png" />
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
