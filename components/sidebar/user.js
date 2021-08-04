/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 3rem;
  background: #44337c;
  p {
    margin: 0;
    text-transform: capitalize;
  }
`;

function User() {
  const [userImage, setUserImage] = useState();
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserImage(localStorage.userImage);
    setUserName(localStorage.userName.toLowerCase());
  }, []);
  console.log(userName);
  return (
    <UserStyled>
      <img src={userImage} alt="" />
      <p>{userName}</p>
    </UserStyled>
  );
}

export default User;
