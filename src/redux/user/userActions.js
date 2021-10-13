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

export const logInUser = toast => {
  return dispatch => {
    // login initiate
    console.log('logInUser')

    dispatch(registerUserInitiate())
    signInWithPopup(auth, googleAuthProvider)
      .then(response => {
        // console.log(response.user)
        const userId = response.user.reloadUserInfo.localId
        console.log(userId)
        toast({
          title: 'Account Login Successfully',
          description: 'You have successfully logged in',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        dispatch(registerUserSuccess(userId.toString()))
      })
      .catch(error => {
        console.log(error.message)
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        dispatch(registerUserError(error))
      })
  }
}

export const logOutUser = toast => {
  return dispatch => {
    signOut(auth)
      .then(res => {
        dispatch(registerUserSuccess(null))
        toast({
          title: 'Sign Out',
          description: 'Sign out successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      })
      .catch(error => {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        dispatch(registerUserError(error.message))
      })
  }
}
