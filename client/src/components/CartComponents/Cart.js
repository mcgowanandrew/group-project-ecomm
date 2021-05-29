import React from "react";
import styled from "styled-components";
import { BiCartAlt } from "react-icons/bi";

const Cart = () => {
  return (
    <Wrapper>
      <BiCartAlt />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 4px;
  border: none;
  background: red;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
// const StyledBiCartAlt = styled(BiCartAlt)`
//   width: 2.6rem;
//   height: 100%;
//   &:hover {
//     opacity: 0.5;
//     transition: all 0.2s ease-in-out;
//   }
// `;

export default Cart;
