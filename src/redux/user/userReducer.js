import {
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATE,
  REGISTER_USER_SUCCESS,
  SET_USER,
  SET_USER_LOADING,
} from './userTypes'

const initialState = {
  loading: false,
  user: null,
  error: '',
  initialUserLoading: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_INITIATE:
      return {
        ...state,
        loading: true,
      }
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: '',
        initialUserLoading: false,
      }
    case REGISTER_USER_ERROR:
      return {
        loading: false,
        user: '',
        error: action.payload,
        initialUserLoading: false,
      }
    case SET_USER:
      return {
        loading: false,
        user: action.payload,
        error: '',
        initialUserLoading: false,
      }
    case SET_USER_LOADING:
      return {
        loading: false,
        user: '',
        error: '',
        initialUserLoading: true,
      }

    default:
      return state
  }
}

export default userReducer
