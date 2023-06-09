import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
    isAllCompleted
  } = useContext(TodoContext);

  return (
    <h1>
      {isAllCompleted ?
        '🎉 Felicidades, has completado todas tus tareas 🎉' :
        `Has completado ${completedTodos} de ${totalTodos} TODOs`}
    </h1>
  )
}

export { TodoCounter };