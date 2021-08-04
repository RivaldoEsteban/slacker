import React, { useState } from "react";
import styled from "styled-components";

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
  .active {
    background: var(--pink);
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

function Channels() {
  const [channelActive, setChannelActive] = useState("channel1");

  function handleChangeChannel(channel) {
    setChannelActive(channel.id);
  }
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
              className={channelActive === channel.id ? "active" : ""}
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
