import React, { useContext } from "react";
import { styled, keyframes } from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { themeUpdateContext } from "../App";
import DarkModToggle from "./DarkmodToggle";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Menu({ SetHamburgerMenuShow, HamburgerMenuShow, myUsername }) {
  const setTheme = useContext(themeUpdateContext);
  const history = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    history("/login");
  };
  return (
    <MenuContainer style={HamburgerMenuShow ? { translate: "0 0" } : {}}>
      <Profile>
        <MdArrowBackIos
          onClick={() => SetHamburgerMenuShow((e) => !e)}
          size={25}
        />
        <Picture>
          <BsFillPersonFill size={50} />
        </Picture>
        <Name
          onClick={() =>
            setTheme({
              color: "red",
            })
          }
        >
          {myUsername}
        </Name>
        <Email>taheri.m.99.10@gmail.com</Email>
        <DarkMod>
          <DarkModToggle />
        </DarkMod>
      </Profile>
      <Item>New Group</Item>
      <Item onClick={logout}>Logout</Item>
    </MenuContainer>
  );
}

export default Menu;
const MenuContainer = styled.div`
  color: ${({ theme }) => theme.color.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.complementaryOne};
  transition: 0.2s;
  border-right: solid 1px ${({ theme }) => theme.color.primary};

  position: absolute;
  top: 0;
  left: 0;
  translate: -100% 0;
  border-radius: 10px;
`;
const Profile = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid #c0c0c0 1px;
  svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;
const Picture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ffffff63;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme.color.bg};
  }
`;
const Name = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
`;
const DarkMod = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  border: 1px solid #0b020234;
  border-radius: 5px;
  overflow: hidden;
`;
const Email = styled.div`
  font-size: 13px;
`;
const Item = styled.div`
  font-size: 16px;
  width: calc(100% - 20px);
  background: ${({ theme }) => theme.color.complementaryTwo};
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
