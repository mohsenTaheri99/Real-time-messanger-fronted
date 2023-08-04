import React, { useState } from "react";
import { styled } from "styled-components";
import { MdOutlineSend } from "react-icons/md";

function ChatInput({ sendMessage, chatId, imTyping }) {
  const [chatInput, setChatInput] = useState("");
  const send = (e) => {
    e.preventDefault();
    if (chatInput === "") return;
    setChatInput("");
    sendMessage(chatInput, chatId);
  };
  return (
    <ChatInputForm onSubmit={send}>
      <InputContainer>
        <input
          type="text"
          value={chatInput}
          onChange={(e) => {
            setChatInput(e.target.value);
            imTyping(chatId);
          }}
          placeholder="message"
        />
      </InputContainer>
      <SendButton type="submit">
        <MdOutlineSend size={30} />
      </SendButton>
    </ChatInputForm>
  );
}

export default ChatInput;

const ChatInputForm = styled.form`
  margin-top: 20px;
  padding: 0 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SendButton = styled.button`
  width: 50px;
  height: 50px;
  @media (max-width: 500px) {
    height: 40px;
    width: 40px;
  }
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.complementaryTwo};
  border: solid 1px ${({ theme }) => theme.color.text + "90"};

  svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;
const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 50px;
  padding: 0 15px;
  border-radius: 20px;
  margin-right: 15px;
  border: solid 1px ${({ theme }) => theme.color.text + "90"};
  background: ${({ theme }) => theme.color.complementaryTwo};

  @media (max-width: 500px) {
    height: 40px;
  }

  input {
    height: 100%;
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font-size: 18px;
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
  input::placeholder {
    color: ${({ theme }) => theme.color.text + "90"};
  }
`;
