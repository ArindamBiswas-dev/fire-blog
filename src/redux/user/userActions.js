import { signInWithPopup, signOut } from '@firebase/auth'
import { auth, googleAuthProvider } from '../../firebase-config'
import {
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATE,
  REGISTER_USER_SUCCESS,
  SET_USER,
  SET_USER_LOADING,
} from './userTypes'

export const registerUserInitiate = () => {
  console.log('from rui')
  return {
    type: REGISTER_USER_INITIATE,
  }
}

export const registerUserSuccess = user => {
  console.log('from rus : ' + user)
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  }
}

export const registerUserError = error => {
  return {
    type: REGISTER_USER_ERROR,
    payload: error,
  }
}

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user,
  }
}

export const setUserLoading = () => {
  return {
    type: SET_USER_LOADING,
  }
}

export const logInUser = () => {
  return dispatch => {
    // login initiate
    console.log('logInUser')

    dispatch(registerUserInitiate())
    signInWithPopup(auth, googleAuthProvider)
      .then(response => {
        // console.log(response.user)
        const userId = response.user.reloadUserInfo.localId
        console.log(userId)
        dispatch(registerUserSuccess(userId.toString()))
      })
      .catch(error => {
        console.log(error.message)
        dispatch(registerUserError(error))
      })
  }
}

export const logOutUser = () => {
  return dispatch => {
    signOut(auth)
      .then(res => {
        dispatch(registerUserSuccess(null))
      })
      .catch(error => {
        dispatch(registerUserError(error.message))
      })
  }
}
