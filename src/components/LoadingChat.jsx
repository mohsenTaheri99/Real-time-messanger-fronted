import { styled } from "styled-components";
import Lottie from "lottie-react";
import animationData from "../svg/typing indicator.json";

function LoadingChat() {
  return (
    <LoadingChatContainer>
      <Lottie animationData={animationData} />
    </LoadingChatContainer>
  );
}

export default LoadingChat;

const LoadingChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
