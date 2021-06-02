import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { BiUserCircle, BiCartAlt, BiSearchAlt2 } from "react-icons/bi";

const Header = ({
  value,
  setValue,
  searchResults,
  setSearchResults,
  allItems,
}) => {
  const history = useHistory();
  const handleSearch = () => {
    // console.log(allItems);
    console.log(value);
    // gets value of input box
    // looks thru store data to see if any store item .includes(search term)
    // does a history.push to a search results component that loads the relevant store item(s)
    // that were .includes in the store items state.... naw mean?
    // if none, just return the search results component that says "sry nothing found xD"
    const filteredSearchResults = allItems.filter((item) => {
      let checkedItem = "";
      let lowerCaseSearchResults = item.name.toLowerCase();
      let lowerCaseInputValue = value.toLowerCase();
      let checkedCategory = "";
      if (lowerCaseSearchResults.includes(lowerCaseInputValue)) {
        checkedItem = item.name;
      }
      return checkedItem;
    });
    console.log(filteredSearchResults);
    setSearchResults(filteredSearchResults);
    history.push("/search-results");
  };
  return (
    <Main>
      <LinkWrap>
        <StoreName exact to={"/"}>
          Clown Town
        </StoreName>
        <Cat exact to={"/categories"}>
          Categories
        </Cat>
        <All exact to={"/shop/shop-all"}>
          Shop All
        </All>
        <About exact to={"/about-us"}>
          About US
        </About>
        <Con exact to={"/contact"}>
          Contact
        </Con>
      </LinkWrap>
      <CartWrap>
        <SearchWrapper>
          <div>
            <Input
              type="text"
              placeholder="search for items"
              value={value}
              onChange={(ev) => setValue(ev.target.value)}
              onKeyDown={(ev) => {
                if (ev.key === "Enter") {
                  handleSearch(ev.target.value);
                }
              }}
            />
            <button
              onClick={(ev) => {
                handleSearch(ev.target.value);
              }}
            >
              <StyledBiSearchAlt2 />
            </button>
          </div>
        </SearchWrapper>
        <StyledBiUserCircle />
        <NavLink to={"/shop/cart"}>
          <StyledBiCartAlt />
        </NavLink>
      </CartWrap>
    </Main>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledBiCartAlt = styled(BiCartAlt)`
  width: 2.3vw;
  height: 100%;
  cursor: pointer;
  color: white;

  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;
const StyledBiUserCircle = styled(BiUserCircle)`
  width: 2.3vw;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const CartWrap = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 1.5rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
`;

const StoreName = styled(NavLink)`
  font-size: 3vw;
  color: #fff;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const Cat = styled(NavLink)`
  font-size: 1.5vw;
  font-weight: 550;
  margin-left: 1rem;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const All = styled(NavLink)`
  margin-left: 1rem;
  font-size: 1.5vw;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const About = styled(NavLink)`
  margin-left: 1rem;
  font-size: 1.5vw;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const Con = styled(NavLink)`
  margin-left: 1rem;
  font-size: 1.5vw;
  font-weight: 550;
  color: #fff;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  margin-left: 1rem;
`;

const Main = styled.div`
  color: #fff;
  /* position: relative; */
  z-index: 10;
  background: #000;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  border-radius: 10px;
`;

const StyledBiSearchAlt2 = styled(BiSearchAlt2)`
  width: 2.3vw;
  height: 100%;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

export default Header;
