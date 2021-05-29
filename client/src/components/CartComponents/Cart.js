import React from "react";
import styled from "styled-components";

const Cart = () => {
  return (
    <Container>
      <Wrapper>Button</Wrapper>
    </Container>
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export default Cart;
