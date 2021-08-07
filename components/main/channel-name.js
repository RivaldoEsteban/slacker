/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "styled-components";

const ChannelNameStyled = styled.div`
  height: 3.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  img {
    height: 2.75rem;
    width: 2.75rem;
    border-radius: 0.25rem;
  }
  > * {
    margin: 0;
    font: var(--body1-bold);
  }
  .button-enabled {
    background: none;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border-radius: 50%;
    justify-content: center;
    cursor: pointer;
    img {
      margin: 3px 5px 3px 3px;
      height: 1.2rem;
      width: 1.2rem;
    }
    :hover {
      border: 2px solid royalblue;
    }
    :active {
      transform: scale(0.95);
    }
  }
`;

function ChannelName({
  channelImage,
  channelActive,
  sidebarActive,
  currentChaneel,
  widthPage,
}) {
  function handleChannelClick() {
    if (widthPage < 851) {
      console.log("menor");
      sidebarActive(true);
      currentChaneel(false);
    }
  }
  return (
    <ChannelNameStyled>
      {widthPage < 851 ? (
        <button onClick={handleChannelClick} className="button-enabled">
          <img src="./icons/arrow-left.svg" alt="back channel icon" />
        </button>
      ) : (
        ""
      )}
      {channelImage ? <img src={channelImage} alt="user image" /> : <p>#</p>}
      <h1>{channelActive}</h1>
    </ChannelNameStyled>
  );
}

export default ChannelName;
