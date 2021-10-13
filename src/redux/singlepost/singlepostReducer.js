import {
  FETCH_SINGLEPOST_ERROR,
  FETCH_SINGLEPOST_REQUEST,
  FETCH_SINGLEPOST_SUCCESS,
} from './singlepostTypes'

const initialState = {
  loading: false,
  post: null,
  error: '',
}

const singlePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLEPOST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SINGLEPOST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      }
    case FETCH_SINGLEPOST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default singlePostReducer
