import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { InitialState } from "../store";
import { addTodo } from "../store/todos/actions";
import { TodoFormComponent } from "../components/organisms/TodoFormComponent";

const mapStateToProps = (state: InitialState) => {
  return {
    todos: state.todos,
    newId: state.todos.length + 1
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { actions: bindActionCreators({ addTodo }, dispatch) }
};

export type TodoFormProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export const TodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormComponent);
