// action constants
export const ADD_TODO = '[TODO] Add todo';
export const REMOVE_TODO = '[TODO] Remove todo';

// action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}
export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}