import { Button, IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import { ImFire } from 'react-icons/im'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LogInModal from './LogInModal'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../redux/user/userActions'
import { useToast } from '@chakra-ui/toast'

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const toast = useToast()

  const signOut = () => {
    console.log('sign out')
    dispatch(logOutUser(toast))
  }

  return (
    <>
      <Flex
        justify="center"
        border="1px solid"
        borderColor="gray.300"
        position="sticky"
        top="0"
        w="full"
        backgroundColor="white"
        px={4}
        zIndex="100"
      >
        <Flex maxW={1280} width="full" py={4} alignItems="center">
          <Link to="/">
            <Flex alignItems="center">
              <Box color="red.400">
                <ImFire fontSize="45" />
              </Box>
              <Box pt={1} ml={2}>
                <Heading size="lg">FireBlog</Heading>
              </Box>
            </Flex>
          </Link>
          <Box ml="auto">
            {!user ? (
              <Button colorScheme="pink" onClick={onOpen}>
                Sign In
              </Button>
            ) : (
              <>
                <Link to="/new">
                  <Button colorScheme="pink">New Post</Button>
                </Link>
                <IconButton
                  aria-label="Search database"
                  icon={<FiLogOut />}
                  ml={4}
                  onClick={signOut}
                />
              </>
            )}
          </Box>
        </Flex>
      </Flex>
      <LogInModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default Navbar
