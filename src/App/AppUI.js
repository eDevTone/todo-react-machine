import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';




import { TodoContext } from "../TodoContext";
import { useContext } from "react";


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <main>
      <section className='container'>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {loading &&
            <TodosLoading />
          }
          {error &&
            <TodosError />
          }
          {
            (!loading && !searchedTodos.length) &&
            <EmptyTodos />
          }
          {
            renderTodoItems(searchedTodos, completeTodo, deleteTodo)
          }
        </TodoList>

        <CreateTodoButton setOpenModal={setOpenModal} />
      </section>
      {
        openModal && (
          <Modal setOpenModal={setOpenModal}>
            <TodoForm />
          </Modal>
        )
      }
    </main >

  );
}

function renderTodoItems(todos, completeTodo, deleteTodo) {
  return todos.map(todo => (
    <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onCompleted={completeTodo}
      onDelete={deleteTodo}
    />
  ))
}


export { AppUI };