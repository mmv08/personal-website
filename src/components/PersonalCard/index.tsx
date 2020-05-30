import * as React from "react"
import styled from "styled-components"
import Link from "components/layout/Link"
import { Wave } from "./Wave"
import SocialLinks from "./SocialLinks"

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
      I&apos;m <b>Mikhail</b>, Frontend Engineer at{" "}
      <Link href="https://gnosis.io" target="_blank" rel="noopener noreferrer">
        Gnosis
      </Link>
    </p>
    <SocialLinks />
  </div>
)

export default PersonalCard
