/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import User from "../user/user";
const UserStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: #44337c;
  padding: 0 1rem;
  box-sizing: border-box;
  p {
    margin: 0;
    text-transform: capitalize;
  }
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

function CurrentUser() {
  const [background, setBackground] = useState();
  const [userName, setUserName] = useState("rivaldo");
  useEffect(() => {
    console.log(localStorage);
    setBackground(localStorage.background);
    setUserName(localStorage.userName.toLowerCase());
  }, []);
  return (
    <UserStyled>
      <User currentName={userName} backgroundColor={background} />
      {/* <img
        src={typeof userImage === "string" ? userImage : "./icons/user.svg"}
        alt="avatar"
      />
      <p>{userName}</p> */}
    </UserStyled>
  );
}

export default CurrentUser;
