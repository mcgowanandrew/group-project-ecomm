import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import Footer from "../Footer";
import { FaChevronCircleLeft} from "react-icons/fa";
import AllItems from "../Item/AllItems";
import UpButton from "../UpButton"
const CategoryDetails = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  const { categoryName } = useParams();

  let history = useHistory();

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleBackClick = (e) => {
    e.preventDefault();
    history.push("/categories");
  };

  const [allCat, setAllCat] = useState([]);
  useEffect(() => {
    fetch(`/category/${categoryName}`, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        const feedArray = Object.values(data)[1];

        setAllCat(feedArray);
      });
  }, [categoryName]);

  return (
    <PageWrap>
<UpButton/>
      <Wrap>
       
          <Back onClick={handleBackClick}>
            <Chev />
            <Span>Back</Span>
          </Back>
        <GridWrap>
          {allCat.map((item) => {
            return <AllItems key={item._id} item={item} />;
          })}
        </GridWrap>
      </Wrap>

      <Footer />
    </PageWrap>
  );
};
const Span = styled.span`
 @media (max-width: 768px) {
   display: none;
  }`
const Wrap = styled.div`
  width: 92rem;
  margin: 0 auto;
  @media (max-width: 890px) {
    width: 69rem;
  }
  @media (max-width: 675px) {
    width: 46rem;
  }
  @media (max-width: 415px) {
    width: 23rem;
  }
`;

const Chev = styled(FaChevronCircleLeft)`
  width: 2rem;
  height: auto;
  margin: 2rem 0.5rem;
`;
const Back = styled.div`
  padding: 1rem;
  font-size: 2rem;
  font-weight: 700;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const PageWrap = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const GridWrap = styled.div`
  /* width: 70%; */
  margin: 0 auto;
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
export default CategoryDetails;
