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

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(action.payload);

    yield put(TaskActionCreators.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(TaskActionCreators.getTasksError({ error }));
  }
}

export function * updateTaskSaga (action) {
  try {
    const {
      data: { data: updatedTask },
    } = yield API.updateTask(action.payload);

    yield put(TaskActionCreators.updateTaskSuccess({ updatedTask }));
  } catch (error) {
    yield put(TaskActionCreators.updateTaskError({ error }));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const {
      data: { data },
    } = yield API.deleteTask(action.payload);

    if (data) {
      yield put(
        TaskActionCreators.deleteTaskSuccess({ id: action.payload.id })
      );
    }
  } catch (error) {
    yield put(TaskActionCreators.updateTaskError({ error }));
  }
}

export function * deleteTasksSaga (action) {
  try {
    const {
      data: { data },
    } = yield API.deleteTasks();

    if (data) {
      yield put(TaskActionCreators.deleteTasksSuccess());
    }
  } catch (error) {
    yield put(TaskActionCreators.deleteTasksError({ error }));
  }
}
