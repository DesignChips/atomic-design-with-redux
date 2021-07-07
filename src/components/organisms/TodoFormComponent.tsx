import * as React from "react";
import Box from '@material-ui/core/Box';
import { Formik, Field, Form } from "formik";
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
        actions.resetForm();
      }}
      render={({ isSubmitting }) => (
        <Form>
          <Box display="flex">
            <Field type="text" name="description" component={TextInputComponent} placeholder="Todo Description"/>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Add
            </SubmitButton>
          </Box>
        </Form>
      )}
    />
  );
};
