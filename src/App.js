// import logo from './logo.svg';
import './App.css';
import TodoList from './todo-components/todoList';

function App () {
  return (
    <div>
      {/* <img class="logo" src={logo}/> */}
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
