import { Button } from '@chakra-ui/button'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import { FaGoogle } from 'react-icons/fa'
import React from 'react'

function LogInModal({ onClose, isOpen }) {
  const initialRef = React.useRef()

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent maxW={320}>
        <ModalHeader textAlign="center">Sign Up / Log In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Button
            leftIcon={<FaGoogle />}
            colorScheme="pink"
            variant="solid"
            w="full"
            mt="4"
            ref={initialRef}
          >
            Google
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LogInModal
