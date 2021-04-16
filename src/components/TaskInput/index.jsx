import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../../actions/taskCreators';
import styles from './taskInput.module.scss';
import { TO_DO_INPUT_SCHEMA } from '../../utils/validationSchemas';

const TaskInput = props => {
  const { createTaskAction } = props;

  const onSubmit = (value, formikBag) => {
    createTaskAction({ task: value });
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

const mapDispatchToProps = dispatch => ({
  createTaskAction: ({ task }) =>
    dispatch(TaskActionCreators.createTaskRequest({ task })),
});

export default connect(null, mapDispatchToProps)(TaskInput);
