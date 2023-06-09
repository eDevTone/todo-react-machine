import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon(
  { completed = false, onCompleted }
) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4CAF50' : '#2c3e50'}
      onClick={onCompleted}
    />
  );
}

function DeleteIcon(
  { onDelete }
) {
  return (
    <TodoIcon
      onClick={onDelete}
      type="delete"
      color='#2c3e50'
    />
  );
}

export { CompleteIcon, DeleteIcon };