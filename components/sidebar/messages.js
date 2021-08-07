/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../pages/_app";

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

const contacts = [
  {
    avatar: "./images/leo.svg",
    name: "Leonidas",
    id: "contact1",
  },
  {
    avatar: "./images/cris.svg",
    name: "uxcristopher",
    id: "contact2",
  },
  {
    avatar: "./images/sandy.svg",
    name: "Sandy",
    id: "contact3",
  },
  {
    avatar: "./images/miguel.svg",
    name: "Miguel",
    id: "contact4",
  },
  {
    avatar: "./images/carlos.svg",
    name: "charliwall",
    id: "contact5",
  },
];

function Messages({
  setChannelActive,
  channelActive,
  sidebarActive,
  currentChaneel,
  widthPage,
}) {
  const context = useContext(Context);
  if (widthPage > 851) {
    sidebarActive(true);
    currentChaneel(true);
  }
  function handleContact(contact) {
    setChannelActive(contact.name);
    context.channel.setChannelActive({
      image: contact.avatar,
      channelActive: contact.name,
    });
    if (widthPage < 851) {
      sidebarActive(false);
      currentChaneel(true);
    }
  }

  return (
    <MessagesStyled>
      <h3>Mensajes directos</h3>
      <div>
        {contacts.map((contact) => {
          return (
            <div
              className="contacts"
              key={contact.name}
              onClick={() => {
                handleContact(contact);
              }}
              className={
                channelActive === contact.name ? "contacts active" : "contacts"
              }
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                width="100"
                height="100"
              />
              <p>{contact.name}</p>
            </div>
          );
        })}
      </div>
    </MessagesStyled>
  );
}

export default Messages;
