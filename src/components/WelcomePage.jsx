import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../svg/chat-animation.json";
import { styled } from "styled-components";
function WelcomePage({ setShowWelcomePage, online, setRefresh }) {
  const [end, setEnd] = useState(false);
  const [message, setMessage] = useState("");
  const [reTryIn, setReTryIn] = useState(6);
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnd(true);
      setMessage(`can't reach server retry in`);
    }, 29);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (online && end) setShowWelcomePage(false);
  }, [online, end]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!online && reTryIn === 5) {
        setRefresh((e) => !e);
      }
      if (reTryIn === 0) setReTryIn(6);
      setReTryIn((e) => e - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [online, reTryIn]);

  return (
    <LContainer>
      <Lottie animationData={animationData} />
      <div>{message}</div>
      <div>{end ? reTryIn : ""}</div>
    </LContainer>
  );
}

export default WelcomePage;
const LContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    color: #ff7272;
  }
`;
