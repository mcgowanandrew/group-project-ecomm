import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiUserCircle, BiCartAlt, BiSearchAlt2 } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";

const Header = () => {
  return (
    <Main>
      <LinkWrap>
        <StoreName to={"/"}>Clown Town</StoreName>
        <Cat to={"/categories"}>Categories</Cat>
        <All to={"/shop-all"}>Shop All</All>
        <About to={"/"}>About US</About>
        <Con to={"/"}>Contact</Con>
      </LinkWrap>
      <CartWrap>
        {/* <Search placeholder={"Search"} type="text"></Search> */}
        <StyledBiSearchAlt2 />
        <StyledBiUserCircle />
        <StyledBiCartAlt />
      </CartWrap>
    </Main>
  );
};
// const Search = styled.input`
//   width: 30rem;
//   height: 3rem;
//   margin-bottom: 1rem;
//   border-radius: 1.5rem;
//   border: none;
// `;
const StyledBiSearchAlt2 = styled(BiSearchAlt2)`
  width: 2.6rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;
const StyledBiCartAlt = styled(BiCartAlt)`
  width: 2.6rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;
const StyledBiUserCircle = styled(BiUserCircle)`
  width: 2.6rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const CartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 1.5rem;
  margin-top: 1rem;
  width: 10vw;
  height: 8vh;
`;

const StoreName = styled(NavLink)`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const Cat = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const All = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const About = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const Con = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const LinkWrap = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  margin-left: 1rem;
  width: 50vw;
  height: 8vh;
`;

const Main = styled.div`
  color: #fff;
  position: relative;
  z-index: 10;
  background: #000;
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
`;

export default Header;
