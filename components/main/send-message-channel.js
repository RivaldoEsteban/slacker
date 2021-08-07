import React, { useRef } from "react";
import styled from "styled-components";

const SendMessageChannelStyled = styled.form`
  input {
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 12px 24px;
    border-radius: 0.5rem;
    border: 1px solid #b4b4b4;
    color: #b4b4b4;
    background: var(--black);
    font: var(--body2-regular);
  }
`;

function SendMessageChannel({ currentUser, channelActive, currentSocket }) {
  const form = useRef(null);

  function handleSendMessageSubmit(event) {
    event.preventDefault();
    const data = new FormData(form.current);
    currentSocket.emit("message", {
      user: currentUser,
      message: data.get("message"),
    });
    form.current.reset();
  }

  return (
    <SendMessageChannelStyled onSubmit={handleSendMessageSubmit} ref={form}>
      <input
        type="text"
        name="message"
        placeholder={`Enviar mensaje a ${channelActive}`}
      />
    </SendMessageChannelStyled>
  );
}

export default SendMessageChannel;
