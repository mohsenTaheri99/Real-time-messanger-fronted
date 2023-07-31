import React from "react";
import styled, { keyframes } from "styled-components";
import { BiLoaderCircle } from "react-icons/bi";

function Loading() {
  return (
    <TurningLoading>
      <BiLoaderCircle />
    </TurningLoading>
  );
}

const rotateslide = keyframes`   
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);

  }
  50% {
    transform:rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const TurningLoading = styled.div`
  font-size: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  color: ${({ theme }) => theme.color.bg};
  animation: ${rotateslide} 2s infinite linear;
`;
export default Loading;
