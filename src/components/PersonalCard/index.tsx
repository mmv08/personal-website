import * as React from "react"
import styled from "styled-components"
import Link from "components/layout/Link"
import { Wave } from "./Wave"
import SocialLinks from "./SocialLinks"
import { ThemeMode } from "hooks/useDarkMode"

interface CardProps {
  currentMode: ThemeMode
  toggleTerminal: () => void
}

const Memoji = styled.img<{ hidden?: boolean }>`
  width: 200px;
  height: 200px;

  visibility: ${({ hidden }) => hidden && "hidden"};
`

const PersonalCard: React.FC<CardProps> = ({ currentMode, toggleTerminal }) => (
  <div style={{ textAlign: "center" }}>
    <Memoji src="/memoji.png" alt="Animoji" hidden={currentMode === "light"} />
    <Memoji src="/memoji-glasses.png" alt="Animoji" hidden={currentMode === "dark"} />
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
    <SocialLinks onTerminalClick={toggleTerminal} />
  </div>
)

export default PersonalCard
