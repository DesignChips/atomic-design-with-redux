import actionCreatorFactory from 'typescript-fsa';
import { Todo } from './entity';

const actionCreator = actionCreatorFactory();

export const addTodo = actionCreator<Todo>('ADD_TODO');
export const removeTodo = actionCreator<Todo>('REMOVE_TODO');
