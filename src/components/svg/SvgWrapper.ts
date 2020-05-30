import styled from "styled-components"
import { SvgProps } from "./SvgProps"

const SvgWrapper = styled.svg<SvgProps>`
  fill: ${({ theme }) => theme.colors.primary};
  width: ${({ size = 20 }) => size};
  height: ${({ size = 20 }) => size};
  transition: fill 0.3s ease-in-out;

  &:hover {
    fill: ${({ theme }) => theme.colors.linkHover};
  }
`

export default SvgWrapper
