import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as taskSaga from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, taskSaga.createTaskSaga);
}

export default rootSaga;
