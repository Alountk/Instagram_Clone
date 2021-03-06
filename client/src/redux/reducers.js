import {combineReducers} from 'redux';
import authReducer from './auth/auth.reducers';
import { reducer as formReducer} from 'redux-form';


export default combineReducers({
  auth: authReducer,
  form: formReducer
})
