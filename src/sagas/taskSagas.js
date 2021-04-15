import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';

export function * createTaskSaga (action) {
  try {
    const {
      data: { data: task },
    } = yield API.createTask(action.payload);

    yield put(TaskActionCreators.createTaskSuccess({ task }));
  } catch (error) {
    yield put(TaskActionCreators.createTaskError({ error }));
  }
}
