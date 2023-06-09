import './CreateTodoButton.css';
function CreateTodoButton(
  { setOpenModal }
) {

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  }

  return <button className="btn-new" onClick={onClickButton}>
    <i className="fas fa-plus"></i>
  </button>
}



export { CreateTodoButton };