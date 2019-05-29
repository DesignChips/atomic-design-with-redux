import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addTodo, removeTodo } from './actions';
import { Todo } from './entity';
import { insertItem, removeItem } from '../../utils/immutable';

export type TodosState = Todo[];

export const todosInitialState: TodosState = [];

export const todos: any = reducerWithInitialState(todosInitialState)
  .case(addTodo, (state, payload: Todo) => {
    return insertItem(state, payload, state.length + 1);
  })
  .case(removeTodo, (state, payload: Todo) => {
    const index = state.findIndex(i => i.id === payload.id);
    return removeItem(state, index);
  })
  .default(state => state);
