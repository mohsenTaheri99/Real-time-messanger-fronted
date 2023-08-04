import React, { useEffect, useState } from "react";
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
import MessagePopUp from "../components/MessagePopUp";
import useScreenSize from "../hook/useScreenSize";

function ChatLayout() {
  const screenSize = useScreenSize();
  const [isSmileScreen, setIsSmileScreen] = useState(false);
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    console.log(screenSize.width);
    if (screenSize.width <= 700) {
      setIsSmileScreen(true);
    } else {
      setIsSmileScreen(false);
    }
  }, [screenSize]);

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
    setRefresh,
  } = useWebsocket(token, "ws-messanger.iran.liara.run");
  const [HamburgerMenuShow, SetHamburgerMenuShow] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [showCreateChat, setShowCreateChat] = useState(false);

  if (showWelcomePage)
    return (
      <WelcomePage
        setShowWelcomePage={setShowWelcomePage}
        online={online}
        setRefresh={setRefresh}
      />
    );
  return (
    <MainContainer>
      <SideBar isSmileScreen={isSmileScreen} showContact={showContact}>
        <SearchBox SetHamburgerMenuShow={SetHamburgerMenuShow} />
        <Contacts
          setShowContact={setShowContact}
          onlineUsers={onlineUsers}
          inbox={inbox}
          myUsername={myUsername}
          getMessage={getMessage}
          setShowCreateChat={setShowCreateChat}
          online={online}
        />
        <Menu
          myUsername={myUsername}
          SetHamburgerMenuShow={SetHamburgerMenuShow}
          HamburgerMenuShow={HamburgerMenuShow}
        />
        <CreateNewChat
          setShowContact={setShowContact}
          searchUsers={searchUsers}
          showCreateChat={showCreateChat}
          setShowCreateChat={setShowCreateChat}
          SearchInUsers={SearchInUsers}
          StartNewChat={StartNewChat}
        />
      </SideBar>
      <ChatContainer isSmileScreen={isSmileScreen} showContact={showContact}>
        <Chat
          isSmileScreen={isSmileScreen}
          setShowContact={setShowContact}
          onlineUsers={onlineUsers}
          chat={chat}
          myUsername={myUsername}
          sendMessage={sendMessage}
          imTyping={imTyping}
          isTyping={isTyping}
        />
      </ChatContainer>
      <MessagePopUp online={online} setRefresh={setRefresh} />
    </MainContainer>
  );
}

export default ChatLayout;
