import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/layout'

function BlogCard({ title, slug, timestamp }) {
  return (
    <Link to={`/post/${slug}`}>
      <Box
        border=".2px solid"
        borderColor="gray.300"
        p={4}
        rounded="md"
        color="gray.800"
        _hover={{ color: 'blue.400' }}
        cursor="pointer"
      >
        <Heading size="lg">{title}</Heading>
        <Text mt={2} color="gray.600">
          {timestamp}
        </Text>
      </Box>
    </Link>
  )
}

export default BlogCard
