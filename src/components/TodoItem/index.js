import './TodoItem.css';
// import { CompleteIcon, DeleteIcon } from '../Icons/Icons'


function TodoItem(
  { text, completed, onCompleted, onDelete }
) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      {/* <CompleteIcon
        completed={completed}
        onCompleted={onCompleted}
      /> */}


      <span onClick={() => onCompleted(text)}>
        <i className="fas fa-check icon-check"></i>
      </span>

      <p>{text}</p>

      <span className='cancel' onClick={() => onDelete(text)}>
        <i className="fas fa-times icon-delete"></i>
      </span>


      {/* <DeleteIcon completed={completed}
        onDelete={onDelete}
      /> */}
    </li>
  )
}

export { TodoItem };