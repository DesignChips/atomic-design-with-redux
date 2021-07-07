import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export const AppShell: React.FC = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">{props.children}</Container>
    </React.Fragment>
  );
};
