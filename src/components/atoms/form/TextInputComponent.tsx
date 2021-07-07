import * as React from 'react';
import { FieldProps } from "formik";
import TextField from '@material-ui/core/TextField';

export const TextInputComponent: React.FC<FieldProps> = ({ field, form, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      label={props.placeholder}
      style={{ width: '100%' }}
    />
  );
};
