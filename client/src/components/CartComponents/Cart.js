import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";

//imported CartContyext to add reomve ites and calculate price on cart
// if there is no item conditionaly it will show an empty message
// used map to display some information of added items on the cartItems array
// calcuted total price of all items from the cartItems array

const Cart = () => {
  const { cartItems, setCartItems, onAdd, onRemove } = useContext(CartContext);

  const itemsPrice = cartItems.reduce((a, c) => {
    const price = c.price.substring(1);
    const numPrice = parseInt(price);
    // console.log("price", typeof numPrice);
    return a + c.quantity * numPrice.toFixed(2);
  }, 0);

  const submitHandler = () => {
    alert("Success!");
    setCartItems([]);
  };
  return (
    <Wrapper>
      <Heading>Cart Items</Heading>
      <div>
        {cartItems.length === 0 && (
          <EmptyMsg> Go shop crazy! add a lot of item to your cart!</EmptyMsg>
        )}
      </div>
      <Divider>
        {cartItems.map((item) => (
          <AllOrders key={item._id}>
            <ItemImg src={item.imageSrc} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ButtonWrap>
              <button onClick={() => onRemove(item)}>-</button>
              <button onClick={() => onAdd(item)}>+</button>
            </ButtonWrap>
            <PriceDiv>
              {item.quantity} x {item.price}
            </PriceDiv>
          </AllOrders>
        ))}
        {cartItems.length !== 0 && (
          <OrderSummary>
            <ItemsPrice>Items Price: ${itemsPrice}</ItemsPrice>
            <Tax>Tax: </Tax>
            <Shipping>Shipping:</Shipping>
            <FinalPrice>Total: </FinalPrice>
            <button onClick={submitHandler}>Submit</button>
          </OrderSummary>
        )}
      </Divider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 20px;
  width: 60vw;
  height: 80vh;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Heading = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
  background-color: black;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const EmptyMsg = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  color: Black;
`;

const AllOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  padding: 0.5rem;
`;

const ItemImg = styled.img`
  border-radius: 0.5rem;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
`;

const ItemName = styled.div`
  font-size: 0.9rem;
  width: 10rem;
  padding: 0.5rem;
`;
const ButtonWrap = styled.div`
  padding: 0.5rem;
`;
const PriceDiv = styled.div`
  padding: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
const OrderSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`;

const ItemsPrice = styled.div``;
const Tax = styled.div``;
const Shipping = styled.div``;
const FinalPrice = styled.div``;

export default Cart;
