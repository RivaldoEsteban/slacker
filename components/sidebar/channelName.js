import React from "react";
import styled from "styled-components";
import Logo from "../logo/logo";
const ChannelnameStyled = styled.div`
  border-bottom: 1px solid #54455e;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  height: 60px;
  h3 {
    font: var(--body1-bold);
    margin: 0;
  }
  div {
    display: none;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
    div {
      display: block;
    }
  }
`;

function Channelname({ widthPage, setHiddenLogo }) {
  return (
    <ChannelnameStyled>
      <div>
        <Logo widthPage={widthPage} setHiddenLogo={setHiddenLogo} />
      </div>
      <h3>LeonidasEsteban</h3>
    </ChannelnameStyled>
  );
}

export default Channelname;
