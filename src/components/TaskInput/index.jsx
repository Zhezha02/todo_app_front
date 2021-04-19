import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as TaskActionCreators from '../../actions/taskCreators';
import styles from './taskInput.module.scss';
import { TO_DO_INPUT_SCHEMA } from '../../utils/validationSchemas';

const TaskInput = props => {
  const dispatch = useDispatch();

  const onSubmit = ({ body }, formikBag) => {
    const trimValue = body.trim();

    dispatch(
      TaskActionCreators.createTaskRequest({ task: { body: trimValue } })
    );
    formikBag.resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        validationSchema={TO_DO_INPUT_SCHEMA}
        initialValues={{
          body: '',
        }}
      >
        <Form className={styles.container}>
          <label className={styles.inputContainer}>
            <Field
              className={styles.input}
              name='body'
              placeholder='new task'
            />
            <button type='submit' className={styles.submitBtn}>
              ADD
            </button>
          </label>
        </Form>
      </Formik>
    </>
  );
};

export default TaskInput;