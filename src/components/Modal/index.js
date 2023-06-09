import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const Modal = ({ setOpenModal, children }) => {

  const outsiteClick = (e) => {
    if (e.target.className === 'ModalBackground') {
      setOpenModal(false);
    }
  }

  return ReactDOM.createPortal(
    <div className="ModalBackground" onClick={outsiteClick}>
      <div className="ModalContainer">
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}


export { Modal };