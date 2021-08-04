import React from "react";
import styled from "styled-components";

const ChannelnameStyled = styled.div`
  padding: 1rem;
  border: 1px solid red;
  h3 {
    font: var(--body1-bold);
    margin: 0;
  }
`;

function Channelname() {
  return (
    <ChannelnameStyled>
      <h3>LeonidasEsteban</h3>
    </ChannelnameStyled>
  );
}

export default Channelname;
