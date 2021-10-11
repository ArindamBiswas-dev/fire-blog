import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Flex justify="center">
        <Box maxW={1024} py={10} w="full" px={4}>
          {children}
        </Box>
      </Flex>
    </div>
  )
}

export default Layout
