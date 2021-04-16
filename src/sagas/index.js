import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as taskSaga from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, taskSaga.createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, taskSaga.getTasksSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_REQUEST, taskSaga.updateTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, taskSaga.deleteTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASKS_REQUEST, taskSaga.deleteTasksSaga);

}

export default rootSaga;
