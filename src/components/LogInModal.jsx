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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInUser } from '../redux/user/userActions'

function LogInModal({ onClose, isOpen }) {
  const initialRef = React.useRef()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const loading = useSelector(state => state.user.loading)

  const onLogIn = () => {
    console.log('log in')
    dispatch(logInUser())
  }

  useEffect(() => {
    if (!loading) onClose()
  }, [loading, onClose])

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen && !user}
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
            onClick={onLogIn}
            isLoading={loading}
            loadingText="Signing in..."
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
