import React from "react";
import { styled } from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function SearchBox({
  SetHamburgerMenuShow,
  hamburgerDisable,
  onChange,
  value,
}) {
  return (
    <SearchContainer>
      <GiHamburgerMenu
        style={hamburgerDisable ? { display: "none" } : {}}
        size={30}
        onClick={() => SetHamburgerMenuShow((e) => !e)}
      />
      <InputContainer style={hamburgerDisable ? { width: "100%" } : {}}>
        <BiSearchAlt2 size={25} />
        <input
          type="text"
          name=""
          id=""
          placeholder="search"
          onChange={onChange}
          value={value}
        />
      </InputContainer>
    </SearchContainer>
  );
}

export default SearchBox;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const InputContainer = styled.div`
  height: 50px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  padding: 6px;
  align-items: center;
  background: ${({ theme }) => theme.color.complementaryTwo};
  border-radius: 25px;
  display: flex;
  input {
    width: calc(100% - 30px);
    font-size: 18px;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
  }
  input::placeholder {
    color: ${({ theme }) => theme.color.text + "90"};
  }
`;
