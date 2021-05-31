import React, { useState, createContext, useEffect } from "react";

//created a seperate context to access state and function handlers from all components
//created a state to add or remove items to cart

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //   console.log("allItems", allItems);
  // console.log("item", item);

  //onAdd function will add item to cart by Onclick to add item and increase number of item to cart  by onClick in to increase button

  // itemExist veriable check cartItems and find an item that its id is same as id of item that i need to add
  // if the item exist, update cartItem by setCartItems using map current item and increase the quantity by 1 comparing id or keep the cartItem same also check numInStock
  // if item does no exixt update cartItem by setCartItems and set it to quantity 1

  const onAdd = (item) => {
    const itemExist = cartItems.find((cartItem) => cartItem._id === item._id);
    if (itemExist) {
      //console.log("item", item);

      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id && itemExist.quantity < item.numInStock
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  //onRemove function will remove item or decrease number of item from cart by onClick onto decrease button in cart

  // similarly to add onRemove: if the item exist, quantity is 1 and  item id is not same as cartItem id keep it otherwise remove it
  //used map to compare item id and cartItem id to setCarItems to decrease  by 1 or keep same

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
