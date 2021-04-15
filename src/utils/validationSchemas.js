import * as Yup from 'yup';

export const TO_DO_INPUT_SCHEMA = Yup.object({
  toDo: Yup.string()
    .matches(/^([^ ]+)|([^ ]+[\w ]+)$/, "Task mustn't be an empty field")
    .required('')
});