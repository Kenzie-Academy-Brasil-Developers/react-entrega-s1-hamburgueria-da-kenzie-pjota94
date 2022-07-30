import { Container } from "./style";
import { CgCloseO } from "react-icons/cg";
import { useEffect, useRef } from "react";

const Modal = ({ setIsDouble }) => {
  const modalRef = useRef();

  const fecharModal = () => {
    setIsDouble(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsDouble(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Container>
      <div className="modal-box" ref={modalRef}>
        <button onClick={fecharModal}>
          <CgCloseO />
        </button>
        <p>Você já adicionou este produto.</p>
      </div>
    </Container>
  );
};

export default Modal;
