import {
  FETCH_ALLPOST_ERROR,
  FETCH_ALLPOST_REQUEST,
  FETCH_ALLPOST_SUCCESS,
} from './allpostTypes'

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
