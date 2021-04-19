import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import * as TaskCreators from '../../actions/taskCreators';
import TaskItem from '../TaskItem';
import TasksList from './completedTaskList';
import styles from './toDoList.module.scss';

const ToDoList = () => {
  const { tasks, isFetching, error } = useSelector(({ task }) => task);
  const dispatch = useDispatch();
  const { deleteTasksRequest, getTasksRequest } = bindActionCreators(
    TaskCreators,
    dispatch
  );

  useEffect(() => {
    const loadTask = () => getTasksRequest({ offset: 0 });
    loadTask();
  }, []);

  const openTasksItemList = tasks
    .filter(task => task.isDone === false)
    .map(task => {
      return <TaskItem key={task.id} id={task.id} task={task} />;
    });

  const complitedTasksItemList = tasks
    .filter(task => task.isDone === true)
    .map(task => {
      return <TaskItem key={task.id} id={task.id} task={task} />;
    });

  return (
    <>
      {tasks.length !== 0 && (
        <div className={styles.container}>
          <ul>{openTasksItemList}</ul>
          <TasksList>{complitedTasksItemList}</TasksList>
          <button className={styles.clearButton} onClick={deleteTasksRequest}>
            Clear
          </button>
        </div>
      )}
      {error && <h1 className={styles.error}>{error.message}</h1>}
      <section>{isFetching && <h1>Loading...</h1>}</section>
    </>
  );
};

export default ToDoList;