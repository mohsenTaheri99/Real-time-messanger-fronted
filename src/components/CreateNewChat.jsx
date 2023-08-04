import { styled } from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";
function CreateNewChat({
  showCreateChat,
  setShowCreateChat,
  searchUsers,
  SearchInUsers,
  StartNewChat,
  setShowContact,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
    SearchInUsers(searchInput);
    if (searchInput.length === 0) {
      setMessage("Search username.");
    }
    if (searchInput.length < 3 && searchInput.length !== 0) {
      setMessage("atleast 3 charecter");
    }
    if (searchInput.length >= 3 && searchUsers.length === 0) {
      setMessage("we find nothing");
    }
  }, [searchInput]);
  return (
    <CreateNewChatContainer style={showCreateChat ? { translate: "0 0" } : {}}>
      <Search>
        <MdArrowBackIos
          onClick={() => setShowCreateChat((e) => false)}
          size={25}
        />
        <SearchBox
          hamburgerDisable
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </Search>
      <ContactContainer>
        {searchUsers.map((i) => {
          return (
            <Contact
              key={i._id}
              onClick={() => {
                setSearchInput("");
                StartNewChat(i._id);
                setShowCreateChat((e) => false);
                setShowContact(false);
              }}
            >
              <span>{i.username}</span>
            </Contact>
          );
        })}
        <span>{message}</span>
      </ContactContainer>
    </CreateNewChatContainer>
  );
}

export default CreateNewChat;

const CreateNewChatContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  translate: -100% 0;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  background: ${({ theme }) => theme.color.complementaryOne};
  border-left: solid 1px ${({ theme }) => theme.color.primary};
  border-right: solid 1px ${({ theme }) => theme.color.primary};
  transition: 0.2s;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Search = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid #c0c0c0 1px;
  svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Contact = styled.div`
  padding: 10px;
  font-size: 18px;
  width: calc(100% - 20px);
  height: fit-content;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.color.complementaryTwo};
  color: ${({ theme }) => theme.color.text};
  border-radius: 10px;
  position: relative;
`;
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
