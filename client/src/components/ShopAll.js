import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AllItems from "./Item/AllItems";
import Footer from "./Footer";
import UpButton from "./UpButton";

const ShopAll = ({ allItems, setAllItems }) => {
  // useEffect(() => {
  //   fetch("/shop/shop-all", { method: "GET" })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const feedArray = Object.values(data)[1];
  //       setAllItems(feedArray);
  //     });
  // }, []);

  return (
    <PageWrap>
      <UpButton />
      <GridWrap>
        {allData.map((item) => {
          return <AllItems key={item._id} item={item} />;
        })}
      </GridWrap>
      <Footer />
    </PageWrap>
  );
};

const PageWrap = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

const GridWrap = styled.div`
  width: 90%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 20rem 20rem 20rem 20rem;
  justify-content: center;
  align-items: center;
  grid-gap: 3rem;
  @media (max-width: 890px) {
    grid-template-columns: 20rem 20rem 20rem;
    /* overflow-x:visible; */
  }
  @media (max-width: 675px) {
    grid-template-columns: 20rem 20rem;
  }
  @media (max-width: 415px) {
    grid-template-columns: 20rem;
  }
`;
export default ShopAll;
