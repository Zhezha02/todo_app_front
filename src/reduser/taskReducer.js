import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function taskReducer (state = initialState, action) {
  switch (action.type) {
    //create task
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { task },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...tasks, task],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    // get tasks
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const {
        payload: { tasks: newTasks },
      } = action;
      const { tasks } = state;
      return {
        ...state,
        isFetching: false,
        tasks: [...tasks, ...newTasks],
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    //update task
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const {
        payload: { updatedTask },
      } = action;
      const { tasks } = state;

      const newTasks = [...tasks];
      const taskIndex = newTasks.findIndex(task => task.id === updatedTask.id);
      const task = newTasks[taskIndex];

      newTasks[taskIndex] = { ...task, ...updatedTask };

      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: newTasks,
      };
    }

    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    //delete task
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const {
        payload: { id },
      } = action;
      const { tasks } = state;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: tasks.filter(task => task.id !== id),
      };
    }

    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    //delete tasks
    case ACTION_TYPES.DELETE_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.DELETE_TASKS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [],
      };
    }
    case ACTION_TYPES.DELETE_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default taskReducer;
