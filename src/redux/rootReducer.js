import { combineReducers } from 'redux'
import allPostReducer from './allpost/allpostReducer'
import createPostReducer from './createpost/createpostReducer'
import singlePostReducer from './singlepost/singlepostReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  allpost: allPostReducer,
  singlepost: singlePostReducer,
  createpost: createPostReducer,
  user: userReducer,
})

export default rootReducer
