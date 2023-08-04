import { styled } from "styled-components";
import { MdArrowBackIos } from "react-icons/md";

function ChatHeader({
  contacts,
  isTyping,
  chatId,
  onlineUsers,
  isSmileScreen,
  setShowContact,
}) {
  return (
    <Header>
      <BackButton
        style={isSmileScreen ? {} : { display: "none" }}
        onClick={() => setShowContact(true)}
      >
        <MdArrowBackIos size={20} />
      </BackButton>
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
  position: relative;
  /* background: ${({ theme }) => theme.color.complementaryTwo}; */
  /* border-radius: 20px; */
  font-weight: 600;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-left: 40px;
  height: 60px;
`;
const Name = styled.div`
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.text};
  @media (max-width: 500px) {
    font-size: 1.4em;
  }
`;
const IsTyping = styled.div`
  width: 30px;
  height: 1.5em;
  color: ${({ theme }) => theme.color.primary};
  font-size: 15px;
`;
const BackButton = styled.button`
  svg {
    color: ${({ theme }) => theme.color.primary};
  }
  position: absolute;
  background: transparent;
  left: 0px;
  top: 50%;
  translate: 0 -50%;
`;
