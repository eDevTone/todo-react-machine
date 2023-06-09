
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}
// const _saveTodos = (todos, setTodos) => {
//   localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
//   setTodos && setTodos(todos);
// }


export default App;
