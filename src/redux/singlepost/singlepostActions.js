import {
  FETCH_SINGLEPOST_ERROR,
  FETCH_SINGLEPOST_REQUEST,
  FETCH_SINGLEPOST_SUCCESS,
} from './singlepostTypes'
const options = { year: 'numeric', month: 'long', day: 'numeric' }

export const fetchSinglePostRequest = () => {
  return {
    type: FETCH_SINGLEPOST_REQUEST,
  }
}

export const fetchSinglePostSuccess = posts => {
  return {
    type: FETCH_SINGLEPOST_SUCCESS,
    payload: posts,
  }
}

export const fetchSinglePostError = error => {
  return {
    type: FETCH_SINGLEPOST_ERROR,
    payload: error,
  }
}

export const fetchSinglePost = (
  blogsCollectionRef,
  query,
  where,
  limit,
  id,
  getDocs
) => {
  return async dispatch => {
    dispatch(fetchSinglePostRequest())

    try {
      const q = query(blogsCollectionRef, where('slug', '==', id), limit(1))
      const data = await getDocs(q)

      const blog = data.docs.map(doc => {
        console.log(doc.data().title, doc.data().slug, doc.data().timestamp)
        return {
          title: doc.data().title,
          slug: doc.data().slug,
          timestamp: doc
            .data()
            .timestamp.toDate()
            .toLocaleDateString('en-US', options),
          content: doc.data().content,
        }
      })
      dispatch(fetchSinglePostSuccess(blog[0]))
    } catch (error) {
      dispatch(fetchSinglePostError(error))
    }
  }
}
