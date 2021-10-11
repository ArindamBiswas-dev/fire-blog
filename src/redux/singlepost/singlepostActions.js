import {
  FETCH_SINGLEPOST_ERROR,
  FETCH_SINGLEPOST_REQUEST,
  FETCH_SINGLEPOST_SUCCESS,
} from './singlepostTypes'

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
