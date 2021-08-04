import React from "react";
import styled from "styled-components";
import Channelname from "./channelName";
import Channels from "./channels";
import Messages from "./messages";
import User from "./user";

const IndexStyled = styled.div`
  grid-area: channelName;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

function Sidebar() {
  return (
    <IndexStyled>
      <Channelname />
      <Channels />
      <Messages />
      <User />
    </IndexStyled>
  );
}

export default Sidebar;
