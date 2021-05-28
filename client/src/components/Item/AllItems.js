import React from "react";
import styled from "styled-components";

const Item = ({ item }) => {
  return (
    <>
      <ItemWrapper>
        <ItemImg src={item.imageSrc} alt={item.name} />
        <Name>{item.name}</Name>
        
        </ItemWrapper>
      
    </>
  );
};

const Name = styled.span`
text-align: center;
`
const ItemImg = styled.img`
  width: 18rem;
  height: 18rem;
  margin:0 auto;
`;

const ItemWrapper = styled.div`
display: flex;

flex-direction:column;`;

export default Item;
