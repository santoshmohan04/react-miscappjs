import { combineReducers } from 'redux'
import userReducer from './users/userReducers'

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer
