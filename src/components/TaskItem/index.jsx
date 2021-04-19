import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as TaskCreators from '../../actions/taskCreators';
import cx from 'classnames';
import trashCan from './trash-can-outline.svg';
import styles from './taskItem.module.scss';

const TaskItem = props => {
  const dispatch = useDispatch();
  const { deleteTaskRequest, updateTaskRequest } = bindActionCreators(
    TaskCreators,
    dispatch
  );

  const {
    id,
    task: { isDone, body },
  } = props;

  const checkboxHandler = ({ target: { checked } }) => {
    updateTaskRequest({ id, values: { isDone: checked, body } });
  };

  const taskClasses = cx(styles.taskValue, { [styles.fulfilledTask]: isDone });

  return (
    <li className={styles.wrapper}>
      <label className={styles.taskContainer}>
        <input
          type='checkbox'
          checked={isDone}
          onChange={e => checkboxHandler(e)}
        />
        <span className={taskClasses}>{body}</span>
      </label>
      <button
        className={styles.deleteBtn}
        onClick={() => deleteTaskRequest({ id })}
      >
        <img src={trashCan} alt='delete icon' />
      </button>
    </li>
  );
};

export default TaskItem;