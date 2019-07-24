import { Action } from 'redux';

export enum TodoActionType {
  ADD_TODO = 'ADD_TODO'
};

export interface IAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO,
  payload: {
    todo: string
  }
}

export type TodoAction = IAddTodoAction;

export interface ITodoActionCreater {
  addTodoAction(todo: string): IAddTodoAction;
}

class TodoActionCreater implements ITodoActionCreater {
  public addTodoAction = (todo: string): IAddTodoAction => {
    return {
      type: TodoActionType.ADD_TODO,
      payload: {
        todo
      }
    };
  };
}

export const todoActionCreater: ITodoActionCreater = new TodoActionCreater();