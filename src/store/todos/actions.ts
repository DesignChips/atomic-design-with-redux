import actionCreatorFactory, { ActionCreator } from 'typescript-fsa';
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

export const addTodo: ActionCreator<Todo> = actionCreator<Todo>(ADD_TODO);
export const removeTodo: ActionCreator<Todo> = actionCreator<Todo>(REMOVE_TODO);
