import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { todoActionCreater } from '../actions';
import { IRootState } from '../store';
import TodoComponent from '../components/TodoComponent';

interface IStateToProps {
  todos: string[];
}

interface IDispatchToProps {
  addTodo: (todo: string) => void; 
}

type IProps = IStateToProps & IDispatchToProps;

class TodoContainer extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  private onClickAddButton = (todo: string): void => {
    const { addTodo } = this.props;

    addTodo(todo);
  }

  public render(): JSX.Element {
    const { todos } = this.props;

    return (
      <TodoComponent todos={todos} onClickAddButton={this.onClickAddButton} />
    );
  }
}

const mapStateToProps = (state: IRootState): IStateToProps => {
  const { todoState } = state;
  return { 
    todos: todoState.todos
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => {
  return {
    addTodo: (todo: string) => {
      dispatch(todoActionCreater.addTodoAction(todo));
    }
  }
}

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)
