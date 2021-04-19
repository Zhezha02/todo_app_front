const ACTION_TYPES = {
  CREATE_TASK_REQUEST: 'todo/createRequest',
  CREATE_TASK_SUCCESS: 'todo/createSuccess',
  CREATE_TASK_ERROR: 'todo/createError',

  GET_TASKS_REQUEST: 'todo/getRequest',
  GET_TASKS_SUCCESS: 'todo/getSuccess',
  GET_TASKS_ERROR: 'todo/getError',

  UPDATE_TASK_REQUEST: 'todo/updateRequest',
  UPDATE_TASK_SUCCESS: 'todo/updateSuccess',
  UPDATE_TASK_ERROR: 'todo/updateError',

  DELETE_TASK_REQUEST: 'todo/deleteTaskRequest',
  DELETE_TASK_SUCCESS: 'todo/deleteTaskSuccess',
  DELETE_TASK_ERROR: 'todo/deleteTaskError',

  DELETE_TASKS_REQUEST: 'todo/deleteTasksRequest',
  DELETE_TASKS_SUCCESS: 'todo/deleteTasksSuccess',
  DELETE_TASKS_ERROR: 'todo/deleteTasksError',
};

export default ACTION_TYPES;
