import React from "react"
import styled from "styled-components"
import { LinkedInIcon, GithubIcon, TerminalIcon, StackOverflow } from "components/svg"

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  width: 50;
  margin: 0 auto;
`

const ListItem = styled.li`
  list-style: none;
`

const SocialLinks = ({ onTerminalClick }: { onTerminalClick: () => void }): React.ReactElement => (
  <List>
    <ListItem>
      <a href="https://github.com/mikheevm" rel="noopener noreferrer" target="_blank">
        <GithubIcon />
      </a>
    </ListItem>
    <ListItem>
      <a href="https://www.linkedin.com/in/mikhail-mikheev-a6b5a9160/" rel="noopener noreferrer" target="_blank">
        <LinkedInIcon />
      </a>
    </ListItem>
    <ListItem>
      <a href="https://stackoverflow.com/users/7820085/mikheevm" rel="noopener noreferrer" target="_blank">
        <StackOverflow />
      </a>
    </ListItem>
    <ListItem onClick={onTerminalClick} className="terminalButton">
      <TerminalIcon />
    </ListItem>
  </List>
)

export default SocialLinks
