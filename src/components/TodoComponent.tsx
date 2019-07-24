import * as React from 'react';

interface IProps {
  todos: string[];
  onClickAddButton: (todo: string) => void;
}

interface IState {
  text: string;
}

class TodoComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { text: '' };
  }

  private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.currentTarget.value });
  }

  private onClickAddButton = () => {
    const { onClickAddButton } = this.props;
    const { text } = this.state;

    onClickAddButton(text);
  }

  private showTodos = () => {
    const { todos } = this.props;

    return (
      todos.map((todo, i) => {
        return (
          <ul>
            <li key={i}>{todo}</li>
          </ul>
        );
      }) 
    );
  }

  public render() {
    // const { todos } = this.props;
    const { text } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" value={text} onChange={this.onTextChange} />
        <button onClick={this.onClickAddButton}>Add Todo</button>
        {this.showTodos()}
      </div>
    );
  }
}

export default TodoComponent;