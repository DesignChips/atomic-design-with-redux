import { connect } from "react-redux";
import { InitialState } from "../store";
import { TodoListComponent } from "../components/organisms/TodoListComponent";

const mapStateToProps = (state: InitialState) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = () => ({});

export type TodoListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);
