import * as React from "react";
import Grid from '@material-ui/core/Grid';
import { TodoForm } from "../containers/TodoFormContainer";

export const Index: React.FC = () => {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item style={{ width: '100%' }}>
          <TodoForm/>
        </Grid>
      </Grid>
    </div>
  )
};
