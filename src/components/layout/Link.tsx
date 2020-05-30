import styled from "styled-components"

const Link = styled.a`
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }
`

export default Link
