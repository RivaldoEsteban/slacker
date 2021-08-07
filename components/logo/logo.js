/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  grid-area: logo;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border: 3px solid rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

function Logo({}) {
  return (
    <LogoStyled>
      <img src="./icons/logo.svg" alt="logo" />
    </LogoStyled>
  );
}

export default Logo;
