import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TodoFormProps } from "../../containers/TodoFormContainer";
import { TextInputComponent } from "../atoms/form/TextInputComponent";
import { SubmitButtonComponent as SubmitButton } from "../atoms/form/SubmitButtonComponent";

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
          <Field type="text" name="description" component={TextInputComponent} placeholder="description ..."/>
          <ErrorMessage name="description" component="div" />
          <SubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </Form>
      )}
    />
  );
};
