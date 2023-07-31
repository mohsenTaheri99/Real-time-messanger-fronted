import React, { useState } from "react";
import Chat from "../components/Chat";
import { Navigate } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Contacts from "../components/Contacts";
import {
  ChatContainer,
  MainContainer,
  SideBar,
} from "../styles/ChatLayout.style";
import Menu from "../components/Menu";
import useWebsocket from "../hook/useWebSocket";
import Cookies from "js-cookie";
import WelcomePage from "../components/WelcomePage";
import CreateNewChat from "../components/CreateNewChat";

function ChatLayout() {
  const token = Cookies.get("token");
  if (!token) return <Navigate to="/login" replace={true} />;
  const {
    myUsername,
    chat,
    sendMessage,
    getMessage,
    inbox,
    searchUsers,
    online,
    SearchInUsers,
    StartNewChat,
    imTyping,
    isTyping,
    onlineUsers,
  } = useWebsocket(token, "localhost:9090");
  const [HamburgerMenuShow, SetHamburgerMenuShow] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [showCreateChat, setShowCreateChat] = useState(false);

  if (showWelcomePage)
    return (
      <WelcomePage setShowWelcomePage={setShowWelcomePage} inbox={inbox} />
    );
  return (
    <MainContainer>
      <SideBar>
        <SearchBox SetHamburgerMenuShow={SetHamburgerMenuShow} />
        <Contacts
          onlineUsers={onlineUsers}
          inbox={inbox}
          myUsername={myUsername}
          getMessage={getMessage}
          setShowCreateChat={setShowCreateChat}
        />
        <Menu
          myUsername={myUsername}
          SetHamburgerMenuShow={SetHamburgerMenuShow}
          HamburgerMenuShow={HamburgerMenuShow}
        />
        <CreateNewChat
          searchUsers={searchUsers}
          showCreateChat={showCreateChat}
          setShowCreateChat={setShowCreateChat}
          SearchInUsers={SearchInUsers}
          StartNewChat={StartNewChat}
        />
      </SideBar>
      <ChatContainer>
        <Chat
          onlineUsers={onlineUsers}
          chat={chat}
          myUsername={myUsername}
          sendMessage={sendMessage}
          imTyping={imTyping}
          isTyping={isTyping}
        />
      </ChatContainer>
    </MainContainer>
  );
}

export default ChatLayout;
