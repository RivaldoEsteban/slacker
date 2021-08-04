/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const MessagesStyled = styled.div`
  h3 {
    font: var(--body2-bold);
    margin: 0.5rem 1rem 0.5rem;
  }
  img {
    inline-size: 1.25rem;
    block-size: 1.25rem;
    border-radius: 0.25rem;
    object-fit: cover;
    vertical-align: middle;
  }
  .contacts {
    display: flex;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }
  p {
    font: var(--body2-regular);
    margin: 0;
  }
`;

function Messages() {
  return (
    <MessagesStyled>
      <h3>Mensajes directos</h3>
      <div>
        <div className="contacts">
          <img
            src="./images/leo.svg"
            alt="leo image"
            width="100"
            height="100"
          />
          <p>Leonidas</p>
        </div>
        <div className="contacts">
          <img
            src="./images/cris.svg"
            alt="cris image"
            width="100"
            height="100"
          />
          <p>uxcristopher</p>
        </div>
        <div className="contacts">
          <img
            src="./images/sandy.svg"
            alt="sandy image"
            width="100"
            height="100"
          />
          <p>Sandy</p>
        </div>
        <div className="contacts">
          <img
            src="./images/miguel.svg"
            alt="migule image"
            width="100"
            height="100"
          />
          <p>Miguel</p>
        </div>
        <div className="contacts">
          <img
            src="./images/carlos.svg"
            alt="carlos image"
            width="100"
            height="100"
          />
          <p>charliwall</p>
        </div>
      </div>
    </MessagesStyled>
  );
}

export default Messages;
