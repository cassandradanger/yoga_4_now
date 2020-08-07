import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import flows from './flowsReducer';
import chosenFlow from './chosenFlowReducer';

const rootReducer = combineReducers({
  errors, 
  loginMode,
  user,
  flows,
  chosenFlow
});

export default rootReducer;
