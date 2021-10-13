import {
  FETCH_ALLPOST_ERROR,
  FETCH_ALLPOST_REQUEST,
  FETCH_ALLPOST_SUCCESS,
} from './allpostTypes'
const options = { year: 'numeric', month: 'long', day: 'numeric' }

export const fetchAllPostRequest = () => {
  return {
    type: FETCH_ALLPOST_REQUEST,
  }
}

export const fetchAllPostSuccess = posts => {
  return {
    type: FETCH_ALLPOST_SUCCESS,
    payload: posts,
  }
}

export const fetchAllPostError = error => {
  return {
    type: FETCH_ALLPOST_ERROR,
    payload: error,
  }
}

export const fetchPost = (blogsCollectionRef, getDocs, query, orderBy) => {
  return async dispatch => {
    dispatch(fetchAllPostRequest())

    try {
      const q = query(blogsCollectionRef, orderBy('timestamp', 'desc'))
      const data = await getDocs(q)

      const blogs = data.docs.map(doc => {
        console.log(doc.data().title, doc.data().slug, doc.data().timestamp)
        return {
          title: doc.data().title,
          slug: doc.data().slug,
          timestamp: doc
            .data()
            .timestamp.toDate()
            .toLocaleDateString('en-US', options),
        }
      })

      dispatch(fetchAllPostSuccess(blogs))
    } catch (error) {
      console.log(error)
      fetchAllPostError(error)
    }
  }
}
