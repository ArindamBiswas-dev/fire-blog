import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import { convertToRaw, EditorState } from 'draft-js'
import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import './newpost.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Button } from '@chakra-ui/button'
import { db } from '../../firebase-config'
import { collection, addDoc, serverTimestamp } from '@firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import {
  createPostError,
  createPostRequest,
  createPostSuccess,
} from '../../redux/createpost/createpostActions'
import cryptoRandomString from 'crypto-random-string'
import { useToast } from '@chakra-ui/toast'

function NewPost() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [title, setTitle] = useState('')
  const blogsCollectionRef = collection(db, 'blogs')
  const dispatch = useDispatch()
  const user_id = useSelector(state => state.user.user)
  const loading = useSelector(state => state.createpost.loading)
  const toast = useToast()

  const onEditorStateChange = editorState => {
    setEditorState(editorState)
  }

  const addPost = async () => {
    console.log('add post')

    const slug = title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
    const randomSlugId = cryptoRandomString({ length: 5, type: 'url-safe' })

    dispatch(createPostRequest())

    try {
      // add data to firebase
      await addDoc(blogsCollectionRef, {
        title: title,
        content: convertToRaw(editorState.getCurrentContent()),
        user_id: user_id,
        slug: `${slug}-${randomSlugId}`,
        timestamp: serverTimestamp(),
      })
      toast({
        title: 'Post Added',
        description: 'Your post publish successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      dispatch(createPostSuccess())
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      dispatch(createPostError(error))
    }
  }

  return (
    <Stack spacing={4}>
      <Heading size="lg" mb={4}>
        Create a New Post
      </Heading>
      <Input
        placeholder="Title of the post"
        size="lg"
        py={8}
        fontSize={25}
        fontWeight="semibold"
        _placeholder={{ fontWeight: 'medium' }}
        onChange={e => setTitle(e.target.value)}
      />
      <Box
        w="full"
        border="1px solid"
        borderColor="pink.200"
        rounded="lg"
        padding={2}
        mt={4}
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="toolbar"
          editorClassName="editor"
          wrapperClassName="wrapperClassName"
        />
      </Box>
      <Flex>
        <Button
          variant="solid"
          colorScheme="pink"
          w={200}
          ml="auto"
          onClick={addPost}
          isLoading={loading}
          loadingText="Publishing..."
        >
          Publish
        </Button>
      </Flex>
    </Stack>
  )
}

export default NewPost
