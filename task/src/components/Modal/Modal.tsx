import './Modal.scss';

function Modal({ active, setActive }) {
  return (
    <>
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={() => setActive(true)}
      >
        <div
          className="modalContent"
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </>
  );
}

export default Modal;
