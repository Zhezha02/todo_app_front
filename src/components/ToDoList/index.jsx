import { connect } from 'react-redux';
import * as TaskCreators from '../../actions/taskCreators';
import TaskItem from '../TaskItem';
import React, { useEffect, useState } from 'react';
import styles from './toDoList.module.scss';

const ToDoList = props => {
  const {
    getTasksRequest,
    deleteTasksAction,
    tasks,
    isFetching,
    error,
  } = props;

  const [isOpenedList, setIsOpenedList] = useState(false);

  const switchListState = () => setIsOpenedList(!isOpenedList);

  useEffect(() => {
    const loadTask = () => getTasksRequest({ offset: 0 });
    loadTask();
  }, []);

  const openTasksItemList = tasks
    .filter(task => task.isDone === false)
    .map(task => {
      return <TaskItem key={task.id} id={task.id} task={task} />;
    });
  const complidetTasksItemLish = tasks
    .filter(task => task.isDone === true)
    .map(task => {
      return <TaskItem key={task.id} id={task.id} task={task} />;
    });
  return (
    <>
      {tasks.length !== 0 && (
        <div className={styles.container}>
          <ul>{openTasksItemList}</ul>
          {isOpenedList ? (
            <h1 className={styles.completedTitle} onClick={switchListState}>Show complited tasks ▼ </h1>
          ) : (
            <section>
              <h1 className={styles.completedTitle} onClick={switchListState}>Hide complited tasks ▼ </h1>
              <ul>{complidetTasksItemLish}</ul>
            </section>
          )}
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
