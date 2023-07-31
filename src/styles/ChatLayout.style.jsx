import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`   
  0% {
    opacity:0;
    scale:0.9;
  }
  100% {
    opacity:1;
    scale:1;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  height: 100vh;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto;
  gap: 10px;
  padding: 10px;
`;
export const ChatContainer = styled.div`
  opacity: 0;

  background: ${({ theme }) => theme.color.complementaryOne};
  border-radius: 10px;
  animation: ${fadeIn} 0.4s forwards;
`;
export const SideBar = styled.div`
  opacity: 0;
  border-left: solid 1px ${({ theme }) => theme.color.primary};
  position: relative;
  background: ${({ theme }) => theme.color.complementaryOne};
  border-radius: 10px;
  overflow: hidden;
  animation: ${fadeIn} 0.4s forwards;
`;
