import React from "react";
import styled from "styled-components";

const Item = (item) => {
  return (<ItemWrapper>{item.price}</ItemWrapper>);
};

const ItemWrapper = styled.div``;

export default Item;
