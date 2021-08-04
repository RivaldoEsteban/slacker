import React from "react";
import styled from "styled-components";

const MainStyled = styled.main`
  grid-area: channelChat;
  background: var(--black);
`;

function Main({ children }) {
  return <MainStyled>{children}</MainStyled>;
}

export default Main;
