import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import ControlBar from "./ControlBar"
import styled from "styled-components"

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
  height: 250px;
  border-radius: 5px;

  font-family: "Source Code Pro", monospace;
`

const Window: React.FC<Props> = ({ children, onClose, isOpen, windowRef }) => {
  const bodyRef = React.useRef<HTMLBodyElement>(document.body as HTMLBodyElement)

  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          drag
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
