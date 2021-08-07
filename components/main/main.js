/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../pages/_app";
import ChannelName from "./channel-name";
import ChannelChat from "./channel-chat";
import SendMessageChannel from "./send-message-channel";

const MainStyled = styled.main`
  grid-area: channelChat;
  background: var(--black);
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    grid-area: channelActive;
    z-index: 10;
  }
`;

function Main({ sidebarActive, currentChaneel, widthPage }) {
  const context = useContext(Context);
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState({ name: "", avatar: "" });
  const [currentSocket, setCurrentSocket] = useState();
  const channelActive = context.channel.value.channelActive;
  const channelImage = context.channel.value.image;

  function handleMessage(message) {
    setMessages((messages) => {
      return [...messages, message];
    });
  }

  useEffect(() => {
    const socket = io("https://slacker-rivaldoesteban.herokuapp.com");
    setCurrentSocket(socket);
    setCurrentUser({
      name: localStorage.userName,
      avatar: localStorage.background,
    });
    socket.on("servidor-message", handleMessage);
    return () => {
      socket.off("servidor-message", handleMessage);
    };
  }, []);

  return (
    <MainStyled>
      <ChannelName
        channelImage={channelImage}
        channelActive={channelActive}
        sidebarActive={sidebarActive}
        currentChaneel={currentChaneel}
        widthPage={widthPage}
      />
      <ChannelChat messages={messages} currentUser={currentUser} />
      <SendMessageChannel
        channelActive={channelActive}
        currentUser={currentUser}
        currentSocket={currentSocket}
      />
    </MainStyled>
  );
}

export default Main;
