import React from "react";
import styled from "styled-components";

const ChannelChatStyled = styled.div`
  flex: 1;
  position: relative;
  padding: 1rem;
  overflow: auto;
  .currentUser {
    padding: 0.5rem 1rem 0.5rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    img {
      block-size: 3rem;
      inline-size: 3rem;
      border-radius: 0.25rem;
      object-fit: cover;
      vertical-align: middle;
    }
    h3 {
      margin: 0;
      font: var(--body2-bold);
    }
    p {
      margin: 0;
      font: var(--body2-bold);
    }
  }
  .color-select {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
      font-size: 2.5rem;
      text-transform: capitalize;
    }
  }
`;

function ChannelChat({ messages }) {
  return (
    <ChannelChatStyled>
      {messages.map((message) => {
        console.log(message);
        return (
          <div className="currentUser" key={message.id}>
            <div
              className="color-select avatar"
              style={{ background: message.user.avatar }}
            >
              <p>{message.user.name.charAt(0)}</p>
            </div>
            <div>
              <h3>{message.user.name}</h3>
              <p>{message.message}</p>
            </div>
          </div>
        );
      })}
    </ChannelChatStyled>
  );
}

export default ChannelChat;
