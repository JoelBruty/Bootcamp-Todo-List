// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import TodoList from './todo-components/todoList';

function App () {
  return (
    <div>
      <div>
        <h1>React App</h1>
      </div>
      <div>
        <TodoList/>
      </div>
    </div>
  )
}

export default App;
