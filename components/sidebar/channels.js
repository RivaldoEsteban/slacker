import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../pages/_app";

const ChannelsStyled = styled.div`
  h3 {
    font: var(--body2-bold);
    margin: 0.5rem 1rem 0.5rem;
  }
  p {
    font: var(--body2-regular);
    padding: 0.5rem 1rem;
    margin: 0;
  }
`;

const channels = [
  {
    id: "channel1",
    channel: "development",
  },
  {
    id: "channel2",
    channel: "design",
  },
  {
    id: "channel3",
    channel: "production",
  },
  {
    id: "channel4",
    channel: "proyectos",
  },
];

function Channels({
  setChannelActive,
  channelActive,
  sidebarActive,
  currentChaneel,
  widthPage,
}) {
  const context = useContext(Context);
  if (widthPage > 851) {
    sidebarActive(true);
    currentChaneel(true);
  }
  function handleChangeChannel(channel) {
    setChannelActive(channel.channel);
    context.channel.setChannelActive({
      image: "",
      channelActive: channel.channel,
    });

    if (widthPage < 851) {
      sidebarActive(false);
      currentChaneel(true);
    }
  }
  console.log(channelActive);
  return (
    <ChannelsStyled>
      <h3>Canales</h3>
      <div>
        {channels.map((channel) => {
          return (
            <p
              onClick={() => {
                handleChangeChannel(channel);
              }}
              key={channel.id}
              id={channel.id}
              className={channelActive === channel.channel ? "active" : ""}
            >
              # {channel.channel}
            </p>
          );
        })}
      </div>
    </ChannelsStyled>
  );
}

export default Channels;
