import * as React from "react";
import { TodoList } from "../containers/TodoListContainer";
import { TodoForm } from "../containers/TodoFormContainer";

export const Index: React.FC = () => {
  return (
    <div>
      <TodoList/>
      <TodoForm/>
    </div>
  )
};
