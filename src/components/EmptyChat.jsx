import { styled } from "styled-components";
import Lottie from "lottie-react";
import animationData from "../svg/contact us copy.json";
function EmptyChat({ myUsername }) {
  return (
    <EmptyChatContainer>
      <h1>{myUsername} welcome to my chat app</h1>
      <Lottie animationData={animationData} />
    </EmptyChatContainer>
  );
}

export default EmptyChat;

const EmptyChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.5rem;
  }
`;
