import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import CartModal from "./CartModal";
import Footer from "../Footer"
//imported CartContyext to add reomve ites and calculate price on cart
// if there is no item conditionaly it will show an empty message
// used map to display some information of added items on the cartItems array
// calcuted total price of all items from the cartItems array

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    onAdd,
    onRemove,
    openModal,
    setOpenModal,
    handleClickOpen,
    handleClose,
  } = useContext(CartContext);

  //calculated price of items and conditionaly display those to the summary section

  const itemsPrice = cartItems.reduce((a, c) => {
    const price = c.price.substring(1);
    const numPrice = Number(price);
    // console.log("price", typeof numPrice);
    return a + c.quantity * numPrice;
  }, 0);

  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 200 ? "Free" : 10;
  const totalPrice =
    shippingPrice === "Free"
      ? itemsPrice + taxPrice
      : itemsPrice + taxPrice + shippingPrice;

  // handler for submit and reset curtItem button
  const submitHandler = (e) => {
    e.preventDefault();
    let itemQuantArray = [];
    cartItems.map((item) => {
      itemQuantArray.push({ _id: item._id, quantity: item.quantity });
    });

    // update item quants after purchase
    fetch(`/cart/update`, {
      method: "PATCH",
      body: JSON.stringify({ itemQuantArray }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201) {
          // rerun fetch w/ updated data maybe? :)
          // console.log(json.data, "new quantz");
        }
      });

    alert("Success!");
    // reset cart:
    setCartItems([]);
  };
  return (<>
    <Wrapper>
      {/* <Heading>Cart Items</Heading> */}

      <Divider>
        <OrderWrapper>
          {cartItems.length === 0 && (
            <EmptyMsg>Go shop crazy! add a lot of item to your cart!</EmptyMsg>
          )}
          {cartItems.map((item) => (
            <AllOrders key={item._id}>
              <ItemImg src={item.imageSrc} alt={item.name} />
              <ItemName>{item.name}</ItemName>
              <ButtonWrap>
                <RemoveButton onClick={() => onRemove(item)}>-</RemoveButton>
                <AddButton onClick={() => onAdd(item)}>+</AddButton>
              </ButtonWrap>
              <PriceDiv>
                <span>{item.quantity}</span> x <span>{item.price}</span>
              </PriceDiv>
            </AllOrders>
          ))}{" "}
        </OrderWrapper>
        {cartItems.length !== 0 && (
          <OrderSummary>
            <ItemsPrice>
              <span>Price:</span> ${itemsPrice.toFixed(2)}
            </ItemsPrice>
            <Tax>
              <span>Tax:</span> ${taxPrice.toFixed(2)}{" "}
            </Tax>
            <Shipping>
              <span>Shipping:</span> ${shippingPrice}
            </Shipping>
            <FinalPrice>
              <span>Total:</span> ${totalPrice.toFixed(2)}{" "}
            </FinalPrice>
<CheckWrap>
            <Terms>
              <label>
                Accept terms and condition{" "}
                <input type="checkbox" required></input>{" "}
              </label>
            </Terms>

            <CheckoutButton onClick={submitHandler}>Checkout</CheckoutButton>
            </CheckWrap>

          </OrderSummary>
        )}
      </Divider>
      <CartModal />
    </Wrapper>
    {/* <Footer/> */}
    </>
  );
};
const CheckWrap = styled.div`
display:flex;
justify-content:space-between;
width:100%;`

const Wrapper = styled.div`
  padding: 2rem;
  font-size: 20px;
  width: 55vw;
  height: 100%;
  margin: auto;
  margin-top: 4rem;
  border-radius: 10px;
  font-size: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);

  /* background: linear-gradient(
    to left,
    black 33.33%,
    white 33.33%,
    white 33.33%
  ); */
  @media only screen and (max-width: 700px) {
    background: white;
    height: 100%;
  }
`;

// const Heading = styled.div`
//   font-size: 3rem;
//   padding: 0.5rem;
//   text-align: center;
//   background-color: black;
//   color: white;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
// `;

const EmptyMsg = styled.div`
  font-size: 2rem;
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
  margin: 10px;
  /* border-bottom: 0.05rem solid black; */
  box-shadow: 0px 15px 10px -15px;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
  }
`;

const ItemImg = styled.img`
  width: 8rem;
  height: 8rem;
  padding: 0.8rem;
  margin: auto;
  border: 1px solid #fff;
  border-radius: 0.6rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const ItemName = styled.div`
  font-size: 1.5rem;
  width: 15rem;
  padding: 0.8rem;
  margin: 0 1rem;
`;
const ButtonWrap = styled.div`
  padding: 0.8rem;
  margin: 0 1rem;
`;
const PriceDiv = styled.div`
  padding: 0.8rem;
  font-size: 2rem;
  text-align: center;
  margin: 0.5rem;
  span {
    margin: 0 1rem;
  }
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
const OrderSummary = styled.div`
  background: black;
  display: flex;
  flex-flow:row wrap;
  /* flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: flex-end; */
  width:100%;
  font-size: 2rem;
  color: white;
  margin: 10px;
  @media only screen and (max-width: 700px) {
    align-content: center;
    color: black;
    background: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
  }
`;

const ItemsPrice = styled.div`
  padding: 0.8rem;
  text-align: center;
  margin: 1rem;
  span {
    font-size: 1.5rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const Tax = styled.div`
  padding: 0.8rem;
  text-align: center;
  margin: 1rem;
  span {
    font-size: 1.5rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const Shipping = styled.div`
  padding: 0.8rem;
  text-align: center;
  margin: 1rem;
  span {
    font-size: 1.5rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const FinalPrice = styled.div`
  padding: 0.8rem;
  text-align: center;
  margin: 1rem;
  font-weight: 500;
  span {
    font-size: 1.5rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`;

const AddButton = styled.button`
  color: green;
  border: none;
  background: none;
  margin: 0.5rem;
  border: 1px solid white;
  border-radius: 4px;
  &:hover {
    transition: all 0.3s ease-out;
    border: 1px solid green;
    border-radius: 4px;
  }
`;
const RemoveButton = styled.button`
  color: red;
  border: none;
  background: none;
  margin: 0.5rem;
  border: 1px solid white;
  border-radius: 4px;
  &:hover {
    transition: all 0.2s ease-out;
    border: 1px solid red;
    border-radius: 4px;
  }
`;
const CheckoutButton = styled.button`
  margin: 1rem;
  font-size: 1.5rem;
  border: none;
  display:flex;
  border-radius: 0.4rem;
  padding: 0.6rem 2.5rem;
  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
  }
  @media only screen and (max-width: 700px) {
    background: black;
    color: white;
  }
`;

const Terms = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
`;
export default Cart;
