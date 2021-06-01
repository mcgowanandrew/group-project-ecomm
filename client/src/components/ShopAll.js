import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import AllItems from "./Item/AllItems";
import Footer from "./Footer"

const ShopAll = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("/shop/shop-all", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const feedArray = Object.values(data)[1];
        setAllData(feedArray);
      });
  }, []);

  return (
    <PageWrap>
      <GridWrap>
        {allData.map((item) => {
          return <AllItems key={item._id} item={item} />;
        })}
      </GridWrap>
      <Footer/>
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
