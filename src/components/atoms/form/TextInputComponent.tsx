import * as React from 'react';
import { FieldProps } from "formik";

export const TextInputComponent: React.FC<FieldProps> = ({ field, form, ...props }) => {
  return (
    <div>
      <input type="text" {...field} {...props}/>
    </div>
  );
};
