import { connect } from 'react-redux';
import * as TaskCreators from '../../actions/taskCreators';
import TaskItem from '../TaskItem';
import React, { useEffect } from 'react';
import styles from './toDoList.module.scss';

const ToDoList = props => {
  const {
    getTasksRequest,
    deleteTasksAction,
    tasks,
    isFetching,
    error,
  } = props;

  useEffect(() => {
    const loadTask = () => getTasksRequest({ offset: 0 });
    loadTask();
  }, []);

  const tasksItemList = tasks.map(task => {
    return <TaskItem key={task.id} id={task.id} task={task} />;
  });

  return (
    <>
      {tasks.length !== 0 && (
        <div className={styles.container}>
          <ul>{tasksItemList}</ul>

          <button className={styles.clearButton} onClick={deleteTasksAction}>
            Clear
          </button>
        </div>
      )}
      {error && <h1 className={styles.error}>{error.message}</h1>}
      <section>{isFetching && <h1>Loading...</h1>}</section>
    </>
  );
};

const mapStateToProps = ({ task }) => task;

const mapDispatchToProps = dispatch => ({
  deleteTasksAction: () => dispatch(TaskCreators.deleteTasksRequest()),
  getTasksRequest: ({ limit, offset } = {}) =>
    dispatch(TaskCreators.getTasksRequest({ offset, limit })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
