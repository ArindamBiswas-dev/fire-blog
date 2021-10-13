import { Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { collection, query, where, limit, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { fetchSinglePost } from '../../redux/singlepost/singlepostActions'
import { useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { Editor } from 'react-draft-wysiwyg'
import { convertFromRaw, EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './singlepost.css'

function SinglePost() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const blogsCollectionRef = collection(db, 'blogs')
  const loading = useSelector(state => state.singlepost.loading)
  const post = useSelector(state => state.singlepost.post)

  useEffect(() => {
    dispatch(
      fetchSinglePost(blogsCollectionRef, query, where, limit, id, getDocs)
    )
  }, [id])

  return (
    <div>
      {loading && (
        <Flex h="max-content" w="full" justify="center" align="center">
          <SyncLoader color="#E53E3E" loading={true} size={20} />
        </Flex>
      )}
      {!loading && post && (
        <>
          <Heading>{post.title}</Heading>
          <Text mt="10px" color="gray.600" mb="35px">
            {post.timestamp}
          </Text>
          <Editor
            readOnly
            toolbarClassName="toolbar-class"
            editorState={EditorState.createWithContent(
              convertFromRaw(post.content)
            )}
          />
        </>
      )}
    </div>
  )
}

export default SinglePost
