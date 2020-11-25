import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// function* fetchFlows() {
//   try {
//     const response = yield axios.get('/api/flows');
//     console.log(response);

//     yield put({ type: 'SET_FLOWS', payload: response.data });
//   } catch (error) {
//     console.log('User get request failed', error);
//   }
// }

function* addPose(action) {
  console.log(action.payload);
  try{
    yield axios.post('api/pose', action.payload);
    yield action.history.push(`/gallery?${action.id}`);
  } catch(error){
    console.log('User get request failed', error);
    alert("error with post! please try again");
  }
}

function* deletePose(action){
  console.log(action.payload);
}

function* flowsSaga() {
  yield takeLatest('ADD_POSE', addPose);
  yield takeLatest('DELETE_POSE', deletePose);
}

export default flowsSaga;
