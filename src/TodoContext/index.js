import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   {
//     text: 'Cortar cebolla',
//     completed: true
//   }, {
//     text: 'Tomar el curso de intro a React',
//     completed: false
//   }, {
//     text: 'Llorar con la llorona',
//     completed: true
//   },
//   {
//     text: 'Leer habitos atomicos',
//     completed: false
//   }
// ];


const TODO_STORAGE_KEY = 'TODO_V1';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  // State
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error
  } = useLocalStorage(TODO_STORAGE_KEY, []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);


  // Derivated state
  const completedTodos = todos.filter(todo => Boolean(todo.completed)).length;
  const totalTodos = todos.length;

  console.log('Log 1')
  // localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(defaultTodos));

  const isAllCompleted = completedTodos === totalTodos && totalTodos > 0;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );


  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.unshift({
      completed: false,
      text
    });
    setTodos(newTodos);
  };


  const completeTodo = (text) => {
    const newTodos = [...todos]; //Create a copy of the array
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos].filter(todo => todo.text !== text);
    setTodos(newTodos);
  };


  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      isAllCompleted,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  )
}



export { TodoContext, TodoProvider };