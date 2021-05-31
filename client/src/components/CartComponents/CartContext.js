import React, { useState, createContext, useEffect } from "react";

//created a seperate context to access state and function handlers from all components
//created a state to add or remove items to cart

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //   console.log("allItems", allItems);
  // console.log("item", item);

  //onAdd  will add item to cart by Onclick to add item and increase number of item to cart  by onClick in to increase button

  const onAdd = (item) => {
    const itemExist = cartItems.find((cartItem) => cartItem._id === item._id);
    if (itemExist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  //onRemove will remove item or decrease number of item from cart by onClick onto decrease button in cart

  const onRemove = (item) => {
    const itemExist = cartItems.find((cartItem) => cartItem._id === item._id);
    if (itemExist.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...itemExist, quantity: itemExist.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
