import {
  FETCH_ALLPOST_ERROR,
  FETCH_ALLPOST_REQUEST,
  FETCH_ALLPOST_SUCCESS,
} from './allpostTypes'

const initialState = {
  loading: false,
  posts: [],
  error: '',
}

const allPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALLPOST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_ALLPOST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    case FETCH_ALLPOST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default allPostReducer
