import {
  CREATE_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from './createpostTypes'

const initialState = {
  loading: false,
  post: {},
  error: '',
}

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case CREATE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default createPostReducer
