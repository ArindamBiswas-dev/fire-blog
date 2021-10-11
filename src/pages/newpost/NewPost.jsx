import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import { EditorState } from 'draft-js'
import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import './newpost.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Button } from '@chakra-ui/button'

function NewPost() {
  const [editorSate, setEditorState] = useState(EditorState.createEmpty())
  const onEditorStateChange = editorSate => {
    setEditorState(editorSate)
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
          editorState={editorSate}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="toolbar"
          editorClassName="editor"
          wrapperClassName="wrapperClassName"
        />
      </Box>
      <Flex>
        <Button variant="solid" colorScheme="pink" w={200} ml="auto">
          Publish
        </Button>
      </Flex>
    </Stack>
  )
}

export default NewPost
