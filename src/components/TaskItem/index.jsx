import { connect } from 'react-redux';
import * as TaskCreators from '../../actions/taskCreators';
import cx from 'classnames';
import trashCan from './trash-can-outline.svg';
import styles from './taskItem.module.scss';

const TaskItem = props => {
  const {
    id,
    task: { isDone, body },
    updateTaskAction,
    deleteTaskAction,
  } = props;

  const checkboxHandler = checked => {
    updateTaskAction({ id, values: { isDone: checked, body } });
  };

  const taskClasses = cx(styles.taskValue, { [styles.fulfilledTask]: isDone });

  return (
    <li className={styles.wrapper}>
      <label className={styles.taskContainer}>
        <input
          type='checkbox'
          checked={isDone}
          onChange={({ target: { checked } }) => {
            checkboxHandler(checked);
          }}
        />
        <span className={taskClasses}>{body}</span>
      </label>
      <button className={styles.deleteBtn} onClick={() => deleteTaskAction(id)}>
        <img src={trashCan} alt='delete icon' />
      </button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTaskAction: id => dispatch(TaskCreators.deleteTaskRequest({ id })),
  updateTaskAction: ({ id, values }) =>
    dispatch(TaskCreators.updateTaskRequest({ id, values })),
});

export default connect(null, mapDispatchToProps)(TaskItem);
