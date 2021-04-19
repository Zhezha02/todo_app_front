import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const requestHandler = produce((draftState, action) => {
  draftState.isFetching = true;
});

const errorHandler = produce((draftState, action) => {
  const {
    payload: { error },
  } = action;
  draftState.isFetching = false;
  draftState.error = error;
});

const handlers = {
  [ACTION_TYPES.CREATE_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.GET_TASKS_REQUEST]: requestHandler,
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.DELETE_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.DELETE_TASKS_REQUEST]: requestHandler,

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    draftState.isFetching = false;
    draftState.tasks.push(task);
  }),
  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { tasks },
    } = action;
    draftState.isFetching = false;
    draftState.tasks.push(...tasks);
  }),
  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { updatedTask },
    } = action;
    const taskIndex = draftState.tasks.findIndex(
      task => task.id === updatedTask.id
    );
    draftState.isFetching = false;
    draftState.tasks[taskIndex] = { ...updatedTask };
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { id },
    } = action;
    draftState.isFetching = false;
    draftState.tasks = draftState.tasks.filter(task => task.id !== Number(id));
  }),
  [ACTION_TYPES.DELETE_TASKS_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
    draftState.tasks.length = 0;
  }),

  [ACTION_TYPES.CREATE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.GET_TASKS_ERROR]: errorHandler,
  [ACTION_TYPES.UPDATE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.DELETE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.DELETE_TASKS_ERROR]: errorHandler,
};

function taskReducer (state = initialState, action) {
  const { type } = action;

  return handlers[type] ? handlers[type](state, action) : state;
}

export default taskReducer;
