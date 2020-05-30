import styled from "styled-components"

const Wave = styled.span`
  animation-name: wave-anim;
  animation-duration: 2.5s;
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-anim {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

export { Wave }
