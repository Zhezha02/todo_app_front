import React from 'react';
import TaskInput from '../../components/TaskInput';
import ToDoList from '../../components/ToDoList';
import styles from './toDoListPage.module.scss';

const ToDoPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>to-do list</h1>
      <div className={styles.container}>
        <TaskInput />
        <ToDoList />
      </div>
    </div>
  );
};

export default ToDoPage;
