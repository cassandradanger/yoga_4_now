import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import flowsSaga from './flowsSaga';
import poseSaga from './poseSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    flowsSaga(),
    poseSaga()
  ]);
}
