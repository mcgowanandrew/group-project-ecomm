import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import Modal from "react-modal";
Modal.setAppElement("#root");
const CartModal = () => {
  const {
    openModal,
    setOpenModal,
    handleClickOpen,
    handleClose,
    submitHandler,
  } = useContext(CartContext);

  return (
    <>
      {openModal ? (
        <Modal>
          My modal
          {/* <Wrapper>
            <ModalContent>
              <h1>Hey let's create Modal</h1>
              <p>Modal is good</p>
              <button style={submitHandler}>Submit</button>
            </ModalContent>
          </Wrapper> */}
        </Modal>
      ) : null}
    </>
  );
};

const Wrapper = styled.div`
  font-size: 20px;
  width: 70vw;
  height: 100%;
  margin: auto;
  margin-top: 4rem;
  border-radius: 10px;
  font-size: 1rem;
  background: lightgray;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ModalContent = styled.div`
  align-items: center;
  color: #141414;
`;
export default CartModal;
