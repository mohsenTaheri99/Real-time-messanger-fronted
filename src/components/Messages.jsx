import React, { useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import useOnScreen from "../hook/useOnScreen";
function Messages({ chat, username, startDate }) {
  const messagesEndRef = useRef(null);
  const onScreenBottom = useOnScreen(messagesEndRef);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [chat?.length]);
  return (
    <>
      <MessagesContainer>
        <Test>
          <Message
            style={{
              justifyContent: "center",
            }}
          >
            {startDate.split("T")[0]}
          </Message>
          <Message
            style={{
              justifyContent: "center",
            }}
          >
            {startDate.split("T")[1].split(".")[0]}
          </Message>
          {chat.map((e) => (
            <Message
              key={e.date}
              style={{
                justifyContent: e.sender === username ? "end" : "start",
              }}
              className={e.sender === username ? "you" : "me"}
            >
              <p className={e.sender === username ? "you" : "me"}>
                {e.message}
              </p>
            </Message>
          ))}
          <div ref={messagesEndRef} />
        </Test>
      </MessagesContainer>
      {onScreenBottom ? (
        ""
      ) : (
        <ScrollToBottom onClick={scrollToBottom}>
          <AiOutlineArrowDown size={25} />
        </ScrollToBottom>
      )}
    </>
  );
}

export default Messages;

const fadeIn = keyframes`
0%{
  scale:0;
}
100%{
  scale:1;
}
  
`;

const MessagesContainer = styled.div`
  margin-top: 10px;
  width: calc(100% - 30px);
  height: calc(100% - 180px);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px 20px;
  position: relative;
`;
const Message = styled.div`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  position: relative;
  p {
    animation: ${fadeIn} 0.2s ease-in;
    font-size: 18px;

    padding: 5px 15px;
    border-radius: 10px;
    width: fit-content;
    max-width: 300px;
    background: ${({ theme }) => theme.color.complementaryTwo};
    color: ${({ theme }) => theme.color.text};
  }
  .me::after {
    content: "";
    background: ${({ theme }) => theme.color.complementaryTwo};
    width: 10px;
    height: 10px;
    bottom: 0;
    left: 30px;
    position: absolute;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
  }
  .you::after {
    content: "";
    background: ${({ theme }) => theme.color.complementaryTwo};
    width: 10px;
    height: 10px;
    bottom: 0;
    right: 30px;
    position: absolute;
    clip-path: polygon(0 0, 100% 100%, 100% 0);
  }
`;
const Test = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  padding-bottom: 10px;
  min-height: 100%;
  width: auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const ScrollToBottom = styled.div`
  position: absolute;
  bottom: 150px;
  right: 60px;
  /* translate: +100% +100%; */

  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.complementaryTwo};
  color: ${({ theme }) => theme.color.primary};
`;
