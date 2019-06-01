import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TodoFormProps } from "../../containers/TodoFormContainer";

type TodoFormValues = {
  description: string;
};

export const TodoFormComponent: React.FC<TodoFormProps> = props => {
  return (
    <Formik
      initialValues={{ description: "" }}
      onSubmit={(value: TodoFormValues, actions) => {
        props.actions.addTodo({
          id: props.newId,
          description: value.description
        });
        actions.setSubmitting(false);
      }}
      render={({ isSubmitting }) => (
        <Form>
          <Field type="text" name="description" />
          <ErrorMessage name="description" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    />
  );
};
