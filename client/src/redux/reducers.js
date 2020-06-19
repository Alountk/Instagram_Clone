import {combineReducers} from 'redux'
import authReducer from './auth/auth.reducers'

export default combineReducers({
  auth: authReducer
})
