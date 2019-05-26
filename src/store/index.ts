import * as history from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter } from 'connected-react-router';
import { todos, todosInitialState, TodosState } from './todos/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

export type InitialState = {
  todos: TodosState,
  router?: any;
}

const initialState: InitialState  = {
  todos: todosInitialState
};

const middleware: any[] = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const browserHistory = history.createBrowserHistory({});
export const store = createStore(
  combineReducers({
    todos,
    router: connectRouter(browserHistory)
  }),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
