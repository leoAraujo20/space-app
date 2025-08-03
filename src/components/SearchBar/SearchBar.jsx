import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  display: inline-block;
`;

const SearchBarStyled = styled.input`
  display: flex;
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconSearch = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

function SearchBar({ onSearchQueryChange }) {
  return (
    <SearchContainer>
      <SearchBarStyled
        type="text"
        placeholder="Pesquisar..."
        onChange={(event) => onSearchQueryChange(event)}
      />
      <IconSearch src="/icons/search.png" alt="Icone de uma lupa" />
    </SearchContainer>
  );
}

export default SearchBar;
