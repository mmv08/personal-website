import React from "react"
import styled from "styled-components"
import { ThemeMode } from "hooks/useDarkMode"

interface Props {
  onClick: () => void
  currentMode: ThemeMode
  className?: string
}

// inspired by https://codepen.io/havardob/pen/MWawKVy

const Container = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  label {
    position: relative;
    display: block;
    width: 31px;
    height: 31px;
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;
    &:before,
    &:after {
      display: block;
      position: absolute;
      content: "";
      width: 25px;
      height: 25px;
      border-radius: 50%;
      top: 3px;
      left: 3px;
    }
    &:before {
      transition: 0.5s ease;
      background-color: #cf5c36;
    }

    &:after {
      background-color: ${({ theme }) => theme.colors.primaryBg};
      left: -10px;
      transform: scale(0);
      transition: transform 0.5s ease;
    }
  }

  input[type="checkbox"] {
    display: none;
    &:checked + label {
      &:before {
        background-color: #eadeda;
      }

      &:after {
        transform: scale(1);
      }
    }
  }
`

const ThemeSwitcher = ({ currentMode, onClick, className = "" }: Props): React.ReactElement => {
  const darkModeEnabled = currentMode === "dark"

  return (
    <Container className={className}>
      <input type="checkbox" id="toggle" checked={darkModeEnabled} readOnly />
      <label htmlFor="toggle" onClick={onClick}></label>
    </Container>
  )
}

export default ThemeSwitcher
