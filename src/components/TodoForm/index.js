
import React, { useContext, useState } from "react";
import './TodoForm.css';
import { TodoContext } from "../../TodoContext";

const TodoForm = () => {
  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext);

  const [text, setText] = useState('');

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) return;
    addTodo && addTodo(text);
    setOpenModal(false);
  }

  const onChange = (event) => {
    setText(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <section className="form-control">
        <label>Escribe tu nuevo TODO</label>
        <textarea placeholder="Terminar el curso de React"
          rows="3"
          value={text}
          onChange={onChange}
        ></textarea>
      </section>

      <section className="from-actions">
        <button type="button" className="btn btn-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="btn btn-cta">
          Guardar
        </button>
      </section>

    </form>
  )
};

export { TodoForm };