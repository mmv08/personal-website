import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { useMediaQuery } from "hooks/useMediaQuery"
import ControlBar from "./ControlBar"

interface Props {
  isOpen: boolean
  onClose: (event: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode
  windowRef: React.RefObject<HTMLDivElement>
}

const Container = styled(motion.div)`
  position: absolute;
  top: 200px;
  left: 200px;
  width: 600px;
  height: 280px;
  border-radius: 5px;

  font-family: "Source Code Pro", monospace;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (max-width: 600px) {
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
  }
`

const Window: React.FC<Props> = ({ children, onClose, isOpen, windowRef }) => {
  const bodyRef = React.useRef<HTMLBodyElement>(document.body as HTMLBodyElement)
  const isSmallScreen = useMediaQuery("(max-width: 600px)")

  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          drag={!isSmallScreen}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          dragConstraints={bodyRef}
          dragMomentum={false}
          ref={windowRef}
        >
          <ControlBar onClose={onClose} />
          {children}
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Window
