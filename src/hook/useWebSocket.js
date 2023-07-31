import { useEffect, useRef, useState } from "react";

export default function useWebsocket(token, url) {
  const [refresh, setRefresh] = useState(false);
  const [online, setOnline] = useState(false);
  const [inbox, setInbox] = useState([]);
  const [chat, setChat] = useState();
  const [chats, setChats] = useState({});
  const [delivered, setDelivered] = useState(true);
  const [myUsername, setMyUsername] = useState("");
  const [currentChatId, setCurrentChatId] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  let isTypingInterval;

  const ws = useRef(null);

  useEffect(() => {
    if (!token) return;
    ws.current = new WebSocket(`ws://${url}`);
    ws.current.onopen = (event) => {
      const payload = {
        method: "addMe",
        token: token,
      };
      ws.current.send(JSON.stringify(payload));
      console.log("open connection");
      setOnline(true);
      getInbox();
    };
    ws.current.onclose = () => {
      setOnline(false);
    };
    ws.current.onmessage = (event) => {
      const result = JSON.parse(event.data);
      console.log(result);
      switch (result.method) {
        case "inbox":
          {
            setInbox(result.inbox);
            setMyUsername(result.yourUsername);
            console.log(result);
          }
          break;
        case "chat":
          {
            // setChat(result.chat);
            setChats((ac) => {
              const copyAc = { ...ac };
              copyAc[result.chat._id] = result.chat;
              return copyAc;
            });
            console.log(result.chat);
          }
          break;
        case "newMessage":
          {
            setChats((ac) => {
              const copyAc = { ...ac };
              if (!copyAc[result.chatId]) return {};
              console.log(result.message);
              copyAc[result.chatId].messages.push({
                sender: result.sender,
                message: result.message,
                date: new Date(),
              });
              return copyAc;
            });
          }
          break;
        case "SearchInUsers":
          {
            setSearchUsers(result.SearchUsers);
          }
          break;
        case "NewChat":
          {
            console.log(result);
            setInbox((e) => [...e, result.inboxUpdate]);
            getMessage(result.newChat._id);
          }
          break;
        case "inboxUpdate":
          {
            setInbox((e) => [...e, result.inboxUpdate]);
          }
          break;
        case "isTyping":
          {
            clearTimeout(isTypingInterval);
            setIsTyping(result.chatId);
            isTypingInterval = setTimeout(() => {
              setIsTyping(null);
            }, 800);
          }
          break;
        case "thisUserIsOnline":
          {
            console.log(result.username);
            setOnlineUsers((e) => [...e, result.username]);
          }
          break;
        case "thisUserIsOffline":
          {
            setOnlineUsers((e) => {
              const copyOU = [...e];
              const index = copyOU.indexOf(result.username);
              if (index > -1) {
                copyOU.splice(index, 1);
              }
              return copyOU;
            });
          }
          break;
        default:
          break;
      }
    };

    return () => {
      ws.current.close();
      console.log("connection closed");
    };
  }, [refresh]);

  useEffect(() => {
    setChat(chats[currentChatId]);
  }, [chats, currentChatId]);
  const sendMessage = function (message, chatId) {
    const payload = {
      token: token,
      method: "sendMessage",
      message: message,
      chatId: chatId,
    };
    ws.current.send(JSON.stringify(payload));
    setChats((ac) => {
      const copyAc = { ...ac };
      copyAc[currentChatId].messages.push({
        sender: myUsername,
        message: message,
        date: new Date(),
      });
      return copyAc;
    });
  };
  const getMessage = function (chatId) {
    setCurrentChatId(chatId);
    if (chats[chatId]) return;
    setChats((ac) => {
      const copyAc = { ...ac };
      copyAc[chatId] = "loading";
      return copyAc;
    });
    const payload = {
      token: token,
      method: "getMessage",
      chatId: chatId,
    };
    ws.current.send(JSON.stringify(payload));
  };
  const getInbox = function () {
    const payload = {
      token: token,
      method: "getInbox",
    };
    ws.current.send(JSON.stringify(payload));
  };
  const SearchInUsers = function (searchFor) {
    if (searchFor.length <= 2) return setSearchUsers([]);
    const payload = {
      token: token,
      method: "SearchInUsers",
      searchFor: searchFor,
    };
    ws.current.send(JSON.stringify(payload));
  };

  const StartNewChat = function (userId) {
    const payload = {
      token: token,
      method: "StartNewChat",
      userId: userId,
    };
    ws.current.send(JSON.stringify(payload));
  };
  const imTyping = function (chatId) {
    const payload = {
      token: token,
      method: "imTyping",
      chatId: chatId,
    };
    ws.current.send(JSON.stringify(payload));
  };
  return {
    myUsername,
    chat,
    sendMessage,
    getMessage,
    inbox,
    online,
    setRefresh,
    searchUsers,
    SearchInUsers,
    StartNewChat,
    imTyping,
    isTyping,
    onlineUsers,
  };
}
