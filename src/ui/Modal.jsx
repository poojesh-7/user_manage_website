import "./Modal.css";
// import { createPortal } from "react-dom";
const Modal = (props) => {
  const closeModal = () => {
    props.closePopup(false);
  };
  return (
    <div
      onClick={closeModal}
      className={`modal ${props.show ? "visible" : "disappear"}`}
    >
      {props.children}
    </div>
  );
};

export default Modal;
