import actionCreatorFactory from 'typescript-fsa';
import { Todo } from './entity';

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

/*
 * action creators
 */
const actionCreator = actionCreatorFactory();

export const addTodo = actionCreator<Todo>(ADD_TODO);
export const removeTodo = actionCreator<Todo>(REMOVE_TODO);
