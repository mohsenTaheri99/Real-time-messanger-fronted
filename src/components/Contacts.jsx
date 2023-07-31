import React from "react";
import { styled } from "styled-components";
import { BiSolidMessageAdd } from "react-icons/bi";

function Contacts({
  inbox,
  myUsername,
  getMessage,
  setShowCreateChat,
  onlineUsers,
}) {
  console.log(inbox);
  return (
    <ContactContainer>
      <NoContact style={{ display: inbox.length === 0 ? "flex" : "none" }}>
        <span>No contact</span>
        <button onClick={() => setShowCreateChat(true)}>Find someone</button>
      </NoContact>
      {inbox.map((i) => {
        return (
          <Contact key={i._id} onClick={() => getMessage(i.chats)}>
            <span>
              {
                i.contactNames.filter((u) =>
                  u === myUsername ? false : true
                )[0]
              }
            </span>
            <MassageNumber>
              <span></span>
            </MassageNumber>
            <OnlineLight
              style={
                onlineUsers.includes(
                  i.contactNames.filter((u) =>
                    u === myUsername ? false : true
                  )[0]
                )
                  ? {}
                  : { background: "#656565" }
              }
            />
          </Contact>
        );
      })}
      <StartNewChatButton onClick={() => setShowCreateChat(true)}>
        <BiSolidMessageAdd size={30} />
      </StartNewChatButton>
    </ContactContainer>
  );
}

export default Contacts;
const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  flex-direction: column;
  height: calc(100% - 150px);
  margin-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Contact = styled.div`
  padding: 10px;
  padding-left: 30px;
  font-size: 18px;
  width: calc(100% - 20px);
  margin-bottom: 10px;
  background: ${({ theme }) => theme.color.complementaryTwo};
  color: ${({ theme }) => theme.color.text};
  height: fit-content;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;
const MassageNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
  border-radius: 7px;
  /* border: 1px solid
    ${({ theme }) =>
    theme.theme === "light" ? "transparent" : theme.color.primary}; */
  background: ${({ theme }) =>
    theme.theme === "light" ? theme.color.primary : "transparent"};
  position: absolute;
  right: 0;
  top: 50%;
  translate: -10px -50%;
  font-size: 13px;
  span {
    font-weight: 700;
    color: ${({ theme }) =>
      theme.theme === "light" ? theme.color.text : theme.color.primary};
  }
`;
const StartNewChatButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.complementaryTwo};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;

  svg {
    translate: 0 1px;
    color: ${({ theme }) => theme.color.primary};
  }
`;
const OnlineLight = styled.div`
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 50%;
  translate: 0 -50%;
`;

const NoContact = styled.div`
  background: ${({ theme }) => theme.color.complementaryTwo};
  width: calc(100% - 20px);
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 30px;
  span {
    font-size: 18px;
  }
  button {
    color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
    background: transparent;
    margin-top: 10px;
    text-decoration: underline;
  }
`;
