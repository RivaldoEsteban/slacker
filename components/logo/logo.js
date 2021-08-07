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
    max-height: 38px;
    padding: 0;
  }
`;

function Logo({ widthPage, setHiddenLogo }) {
  console.log(widthPage);
  if (widthPage < 601) {
    setHiddenLogo(false);
  }
  if (widthPage > 601) {
    setHiddenLogo(true);
  }
  return (
    <LogoStyled>
      <img src="./icons/logo.svg" alt="logo" />
    </LogoStyled>
  );
}

export default Logo;
