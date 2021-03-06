import { ADD_TODO, REMOVE_TODO, addTodo, removeTodo } from "../actions";
import { todos as reducer } from "../reducer";

describe("todos actions", () => {
  it("should create an action to add a todo", () => {
    const id = 1;
    const description = "Finish docs";
    const expectedAction = {
      type: ADD_TODO,
      payload: { id, description }
    };
    expect(addTodo({ id, description })).toEqual(expectedAction);
  });

  it("should remove an action to remove a todo", () => {
    const id = 1;
    const description = "Finish docs";
    const expectedAction = {
      type: REMOVE_TODO,
      payload: { id, description }
    };
    expect(removeTodo({ id, description })).toEqual(expectedAction);
  });
});

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "@@INIT" })).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      reducer([], {
        type: ADD_TODO,
        payload: {
          id: 1,
          description: "Finish docs"
        }
      })
    ).toEqual([
      {
        id: 1,
        description: "Finish docs"
      }
    ]);
  });

  it("should handle REMOVE_TODO", () => {
    const id = 1;
    const description = "Finish docs";
    expect(
      reducer([{ id, description }], {
        type: REMOVE_TODO,
        payload: { id, description }
      })
    ).toEqual([]);
  });
});
