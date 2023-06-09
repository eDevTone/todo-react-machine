import React from "react";
import { ReactComponent as CheckSVG } from "../../assets/check.svg"; //This is how create-react-app imports SVGs
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg"; //This is how create-react-app imports SVGs
import './TodoIcon.css';

const iconTypes = {
  'check': (color) =>
    <CheckSVG className='icon-svg' fill={color} />,
  'delete': (color) =>
    <DeleteSVG className='icon-svg' fill={color} />
}

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`icon-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };