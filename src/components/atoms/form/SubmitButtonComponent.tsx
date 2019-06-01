import * as React from "react";

export const SubmitButtonComponent: React.FC = ({ children, ...props}) => {
  return <button {...props}>{children}</button>
};
