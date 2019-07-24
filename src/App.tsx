import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoComponent from './components/TodoComponent';

const App: React.FC = () => {
  return (
    <div>
      <TodoComponent 
        todos={['foo', 'bar']}
        onClickAddButton={(text: string): void => {
          console.log(text);
        }}
      />
    </div>
  );
}

export default App;
