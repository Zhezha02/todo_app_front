import ACTION_TYPES from './actionTypes';

//create task
export const createTaskRequest = ({ task }) => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { task },
});

export const createTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

//get tasks
export const getTasksRequest = ({ offset, limit }) => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
  payload: { offset, limit },
});

export const getTasksSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTasksError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error },
});

//update task
export const updateTaskRequest = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
  payload: { id, values },
});

export const updateTaskSuccess = ({ updatedTask }) => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  payload: { updatedTask },
});

export const updateTaskError = ({ error }) => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: { error },
});

//delete task 
export const deleteTaskRequest = ({ id }) => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: { id },
});

export const deleteTaskSuccess = ({ id }) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { id },
});

export const deleteTaskError = ({ error }) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error },
});

//delete tasks 
export const deleteTasksRequest = () => ({
  type: ACTION_TYPES.DELETE_TASKS_REQUEST,
});

export const deleteTasksSuccess = () => ({
  type: ACTION_TYPES.DELETE_TASKS_SUCCESS,
});

export const deleteTasksError = ({ error }) => ({
  type: ACTION_TYPES.DELETE_TASKS_ERROR,
  payload: { error },
});