import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

function MessagePopUp({ online, setRefresh }) {
  const [message, setMessage] = useState("");
  const [showStyle, setShowStyle] = useState("calc(100% + 50px) 0");
  const timeOut = useRef();
  const firstTime = useRef(online);
  useEffect(() => {
    if (!online) {
      firstTime.current = false;
    }
    if (firstTime.current) {
      return;
    }

    clearTimeout(timeOut.current);
    if (online) {
      setMessage("back to online");
      setShowStyle("0 0");
      timeOut.current = setTimeout(() => {
        setShowStyle("calc(100% + 50px) 0");
      }, 2000);
    } else {
      setMessage("connection failed");
      setShowStyle("0 0");
    }
  }, [online]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!online) setRefresh((e) => !e);
    }, 5000);
    return () => clearInterval(timer);
  }, [online]);

  return (
    <MessagePopUpContainer
      style={{ translate: showStyle, borderColor: online ? "" : "yellow" }}
    >
      {message}
    </MessagePopUpContainer>
  );
}

export default MessagePopUp;
const MessagePopUpContainer = styled.div`
  width: 200px;
  height: 80px;
  background: ${({ theme }) => theme.color.complementaryTwo};
  border-right: 4px solid ${({ theme }) => theme.color.primary};
  position: absolute;
  right: 50px;
  top: 60px;
  translate: calc(100% + 50px) 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
`;
