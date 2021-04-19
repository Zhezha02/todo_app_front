import { useState } from 'react';
import styles from './toDoList.module.scss';

const TasksList = (props) => {
  const [isOpenedList, setIsOpenedList] = useState(false);
  const switchListState = () => setIsOpenedList(!isOpenedList);

  return (
    <>
      {isOpenedList ? (
        <h1 className={styles.completedTitle} onClick={switchListState}>
          Show complited tasks ▼{' '}
        </h1>
      ) : (
        <section>
          <h1 className={styles.completedTitle} onClick={switchListState}>
            Hide complited tasks ▼{' '}
          </h1>
          <ul>{props.children}</ul>
        </section>
      )}
    </>
  );
};

export default TasksList;
