import * as React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { TodoListProps } from "../../containers/TodoListContainer";
import { Todo } from "../../store/todos/entity";

export const TodoListComponent: React.FC<TodoListProps> = props => {
  const todos = props.todos;
  const listItems = todos.map((todo: Todo) =>
    <ListItem component="div" disableGutters={true}>
      <ListItemText primary={todo.description}/>
    </ListItem>
  );
  return (
    <List component="div">
      {listItems}
    </List>
  );
};
