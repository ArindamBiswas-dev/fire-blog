import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import BlogCard from '../../components/BlogCard'

function Home() {
  return (
    <Box w="full" display="flex" flexDir="column" gridGap="10">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <Button mx="auto" colorScheme="pink">
        View More
      </Button>
    </Box>
  )
}

export default Home
