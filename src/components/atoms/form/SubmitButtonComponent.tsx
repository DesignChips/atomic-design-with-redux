import * as React from "react";
import Button from '@material-ui/core/Button';

export const SubmitButtonComponent: React.FC = ({ children, ...props}) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
};
