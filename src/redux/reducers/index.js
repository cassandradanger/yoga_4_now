import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import flows from './flowsReducer';

const rootReducer = combineReducers({
  errors, 
  loginMode,
  user,
  flows
});

export default rootReducer;
