import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../../actions/taskCreators';
// import { TO_DO_INPUT_SCHEMA } from '../../utils/validationSchemas';

const TaskInput = props => {
  const { createTaskAction, ...rest } = props;

  const onSubmit = (value, formikBag) => {
    createTaskAction({ task: value });
    formikBag.resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        // validationSchema={TO_DO_INPUT_SCHEMA}
        initialValues={{
          body: '',
        }}
      >
        <Form>
          <Field name='body' placeholder='new task' />
          <button type='submit'>ADD</button>
        </Form>
      </Formik>
      <h1>{JSON.stringify(rest)}</h1>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  createTaskAction: ({ task }) =>
    dispatch(TaskActionCreators.createTaskRequest({ task })),
});
const mapStateToProps = ({ task }) => task;

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);
