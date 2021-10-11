import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/layout'

function BlogCard() {
  return (
    <Link to="/post/a">
      <Box
        border=".2px solid"
        borderColor="gray.300"
        p={4}
        rounded="md"
        color="gray.800"
        _hover={{ color: 'blue.400' }}
        cursor="pointer"
      >
        <Heading size="lg">Lorem ipsum is placeholder text.</Heading>
        <Text mt={2} color="gray.600">
          29 May, 2021
        </Text>
      </Box>
    </Link>
  )
}

export default BlogCard
