import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, titleText, onClose, isOpen }) {
  console.log(isOpen);

  return (
    <div className={isOpen ? "modal modal_opened" : "modal"}>
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src="src\assets\Union.svg" alt="close__X" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
