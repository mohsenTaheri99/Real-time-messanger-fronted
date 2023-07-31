import { styled } from "styled-components";

function ChatHeader({ contacts, isTyping, chatId, onlineUsers }) {
  return (
    <Header>
      <Name>{contacts[0].username}</Name>
      <IsTyping
        style={
          onlineUsers.includes(contacts[0].username)
            ? {}
            : { color: "#7d7d7d99" }
        }
      >
        {isTyping === chatId
          ? "typing..."
          : onlineUsers.includes(contacts[0].username)
          ? "online"
          : "offline"}
      </IsTyping>
    </Header>
  );
}

export default ChatHeader;

const Header = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.color.text + "90"};
  /* width: calc(100% - 40px); */
  width: 100%;
  /* background: ${({ theme }) => theme.color.complementaryTwo}; */
  /* border-radius: 20px; */
  font-weight: 600;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-left: 30px;
  height: 60px;
`;
const Name = styled.div`
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.text};
`;
const IsTyping = styled.div`
  width: 30px;
  height: 1.5em;
  color: ${({ theme }) => theme.color.primary};
  font-size: 15px;
`;
