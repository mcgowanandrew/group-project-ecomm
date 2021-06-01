import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartComponents/CartContext";

const Item = ({ item }) => {
  // const [isShown,setIsShown]=useState(false)
  const { onAdd } = useContext(CartContext);

  return (
    <>
      <ItemWrapper>
        <ItemImg src={item.imageSrc} alt={item.name} />
        <Hover>
          <TopWrap>
            <Name>{item.name}</Name>
            <Cat>{item.category}</Cat>
          </TopWrap>
          <Wrap>
            <Price>{item.price}</Price>
            {item.numInStock === 0 && <SoldOut>SOLD OUT</SoldOut>}
            {item.numInStock >= 1 && (
              //imported onAdd from CartContext to add an item to cart onClick
              <Cart onClick={() => onAdd(item)}>ADD TO CART</Cart>
            )}
          </Wrap>
        </Hover>
      </ItemWrapper>
    </>
  );
};
const TopWrap = styled.div``;

const Wrap = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-end;
`;

const Cart = styled.button`
  color: white;
  width: 100%;
  border: none;
  background: #de1010;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transition: all 0.2s ease-in-out;
    color: #000;
  }
`;

const SoldOut = styled.button`
  color: white;
  /* position: absolute; */
  width: 100%;
  border: none;
  background: #dbdbdb;
  border-radius: 10px;
  padding: 5px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 0.5rem;
`;

const Cat = styled.div`
  color: #5c5e5e;
  font-style: italic;
  margin-top: 0.3rem;
`;

const Name = styled.span`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 0%.5rem;
`;
const ItemImg = styled.img`
  position: absolute;
  z-index: 2;
  border-radius: 1rem;
  width: 17rem;
  height: 17rem;
  margin: 0 auto;
`;

const ItemWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem;
  width: 19.5rem;
  height: 19.5rem;
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;
const Hover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  opacity: 0;
  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
`;

export default Item;
