import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import { styled } from "styled-components";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import EmptyChat from "./EmptyChat";
import LoadingChat from "./LoadingChat";

function Chat({
  chat,
  sendMessage,
  myUsername,
  imTyping,
  isTyping,
  onlineUsers,
  isSmileScreen,
  setShowContact,
}) {
  console.log(chat);
  if (!chat) return <EmptyChat myUsername={myUsername} />;
  if (chat === "loading") return <LoadingChat />;

  return (
    <MainContainer>
      <ChatHeader
        isSmileScreen={isSmileScreen}
        setShowContact={setShowContact}
        onlineUsers={onlineUsers}
        chatId={chat._id}
        isTyping={isTyping}
        contacts={chat.peopleInChat.filter((user) =>
          user.username === myUsername ? false : true
        )}
      />

      <Messages
        username={myUsername}
        chat={chat.messages}
        startDate={chat.date}
      />
      <ChatInput
        sendMessage={sendMessage}
        chatId={chat._id}
        imTyping={imTyping}
      />
    </MainContainer>
  );
}

export default Chat;

const MainContainer = styled.div`
  width: 100%;
  position: relative;
  height: calc(100svh - 20px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
