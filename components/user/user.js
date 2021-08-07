import React from "react";
import styled from "styled-components";

const UserStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.8rem 0;
  .avatar {
    height: 70px;
    width: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin: 0;
    font-size: 2.5rem;
    text-transform: capitalize;
  }
  .color-select {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
  h3 {
    margin: 0;
    font: var(--headline3);
  }
`;

function User({ currentName, backgroundColor }) {
  return (
    <UserStyled className="current-avatar">
      <div
        className="color-select avatar"
        style={{ background: backgroundColor }}
      >
        <p>{currentName.charAt(0)}</p>
      </div>
      <h3>{currentName}</h3>
    </UserStyled>
  );
}

export default User;
