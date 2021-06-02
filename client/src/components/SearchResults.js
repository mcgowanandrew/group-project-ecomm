import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchResults = ({}) => {
  const [value, setValue] = React.useState("");
  const handleSearch = (ev) => {
    // gets value of input box
    // looks thru store data to see if any store item .includes(search term)
    // does a history.push to a search results component that loads the relevant store item(s)
    // that were .includes in the store items stsate.... naw mean?
    // if none, just return the search results c omponent that says "sry nothing found xD"
    console.log(ev);
  };
  return (
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
          handleSearch(ev);
        }}
      >
        <StyledBiSearchAlt2 />
      </button>
    </div>
  );
};

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

export default SearchResults;
