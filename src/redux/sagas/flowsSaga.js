import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchFlows() {
  try {
    const response = yield axios.get('/api/flows');
    console.log(response);

    yield put({ type: 'SET_FLOWS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchChosenFlow(action){
  console.log(action.payload);
  try {
    const response = yield axios.get(`/api/flows/${action.payload}`);
    console.log(response);
    yield put({ type: 'SET_CHOSEN_FLOW', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* flowsSaga() {
  yield takeLatest('FETCH_FLOWS', fetchFlows);
  yield takeLatest('FETCH_CHOSEN_FLOW', fetchChosenFlow);
}

export default flowsSaga;
