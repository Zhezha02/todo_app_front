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
    // case ACTION_TYPES.GET_TASKS_REQUEST: {
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };
    // }
    // case ACTION_TYPES.GET_TASKS_SUCCESS: {
    //   const {
    //     payload: { tasks: newTasks },
    //   } = action;
    //   const { tasks } = state;
    //   return {
    //     ...state,
    //     isFetching: false,
    //     tasks: [...tasks, newTasks],
    //   };
    // }
    // case ACTION_TYPES.GET_TASKS_ERROR: {
    //   const {
    //     payload: { error },
    //   } = action;
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error,
    //   };
    // }

    default:
      return state;
  }
}

export default taskReducer;
