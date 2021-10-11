import {
  CREATE_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from './createpostTypes'

export const createPostRequest = () => {
  return {
    type: CREATE_POST_REQUEST,
  }
}

export const createPostSuccess = () => {
  return {
    type: CREATE_POST_SUCCESS,
  }
}

export const createPostError = error => {
  return {
    type: CREATE_POST_ERROR,
    payload: error,
  }
}
