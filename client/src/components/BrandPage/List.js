import React from "react";

import styled from "styled-components";

const List = ({ brand }) => {
  const brandHandler = () => {
    const win = window.open(brand.url, "_blank");
    win.focus();
  };
  return (
    <>
      <Name onClick={brandHandler}>{brand.name}</Name>
    </>
  );
};

const Name = styled.div`
width:10rem;
font-size: 1.5rem;
cursor: pointer;
&:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }`;

export default List;
