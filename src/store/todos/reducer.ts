import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { addTodo, removeTodo } from './actions';
import { Todo } from './entity';
import { insertItem, removeItem } from '../../utils/immutable';

export type TodosState = Todo[];

export const todosInitialState: TodosState = [];

export const todos = (
  state: TodosState = todosInitialState,
  action?: Action
): TodosState => {
  if (!action) {
    return state;
  }

  if (isType(action, addTodo)) {
    return insertItem(state, action.payload, state.length + 1);
  }

  if (isType(action, removeTodo)) {
    const index = state.findIndex(i => i.id === action.payload.id);
    return removeItem(state, index);
  }

  return state;
};
