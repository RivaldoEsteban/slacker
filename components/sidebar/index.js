import React, { useContext, useState } from "react";
import styled from "styled-components";
import Channelname from "./channelName";
import Channels from "./channels";
import Messages from "./messages";
import CurrentUser from "./user";
import { Context } from "../../pages/_app";

const IndexStyled = styled.div`
  grid-area: channelName;
  /* border: 1px solid red; */
  border-left: 1px solid #54455e;
  border-right: 1px solid #54455e;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  .active {
    background: var(--pink);
  }
  @media (max-width: 850px) {
    grid-area: channelActive;
  }
`;

function Sidebar({ sidebarActive, currentChaneel, widthPage, setHiddenLogo }) {
  const context = useContext(Context);
  console.log(context);
  const [channelActive, setChannelActive] = useState(
    context.channel.value.channelActive
  );

  return (
    <IndexStyled>
      <Channelname widthPage={widthPage} setHiddenLogo={setHiddenLogo} />
      <Channels
        channelActive={channelActive}
        setChannelActive={setChannelActive}
        sidebarActive={sidebarActive}
        currentChaneel={currentChaneel}
        widthPage={widthPage}
      />
      <Messages
        channelActive={channelActive}
        setChannelActive={setChannelActive}
        sidebarActive={sidebarActive}
        currentChaneel={currentChaneel}
        widthPage={widthPage}
      />
      <CurrentUser />
    </IndexStyled>
  );
}

export default Sidebar;
