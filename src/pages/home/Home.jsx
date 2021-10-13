import { Button } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import BlogCard from '../../components/BlogCard'
import { collection, getDocs, query, orderBy } from '@firebase/firestore'
import { db } from '../../firebase-config'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../redux/allpost/allpostActions'
import SyncLoader from 'react-spinners/SyncLoader'

function Home() {
  const blogsCollectionRef = collection(db, 'blogs')
  const dispatch = useDispatch()
  const posts = useSelector(state => state.allpost.posts)
  const loading = useSelector(state => state.allpost.loading)

  useEffect(() => {
    dispatch(fetchPost(blogsCollectionRef, getDocs, query, orderBy))
  }, [])

  return (
    <Box w="full" display="flex" flexDir="column" gridGap="10">
      {loading && (
        <Flex h="max-content" w="full" justify="center" align="center">
          <SyncLoader color="#E53E3E" loading={true} size={20} />
        </Flex>
      )}
      {!loading &&
        posts.length > 0 &&
        posts.map(post => (
          <BlogCard
            title={post.title}
            slug={post.slug}
            timestamp={post.timestamp}
            key={post.slug}
          />
        ))}
      {/* {!loading && posts.length > 0 && (
        <Button mx="auto" colorScheme="pink">
          View More
        </Button>
      )} */}
    </Box>
  )
}

export default Home
