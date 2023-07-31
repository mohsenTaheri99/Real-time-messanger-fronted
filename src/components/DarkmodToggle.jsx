import React, { useContext } from "react";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";
import { styled } from "styled-components";
import { themeUpdateContext } from "../App";

function DarkModToggle() {
  const update = useContext(themeUpdateContext);

  return (
    <I onClick={() => update((e) => (e === "light" ? "dark" : "light"))}>
      <PiMoonDuotone color="white" size={28} style={{ translate: "-2px 0" }} />
      <PiSunDuotone color="yellow" size={28} />
    </I>
  );
}

export default DarkModToggle;

const I = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  translate: ${({ theme }) => (theme.theme === "dark" ? "0 0" : "-50% 0")};
  transition: 0.2s ease-in-out;
`;
