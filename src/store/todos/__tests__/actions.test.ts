import {
  ADD_TODO,
  addTodo,
} from '../actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const id = 1;
    const description = 'Finish docs';
    const expectedAction = {
      type: ADD_TODO,
      payload: { id, description }
    };
    expect(addTodo({ id, description })).toEqual(expectedAction)
  })
});
