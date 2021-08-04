import React from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";

const channels = {
  development: { name: "development", topic: "dgd" },
};
const IdStyled = styled.div``;

function Id({ id, channel }) {
  function handleCookie() {
    const cookies = new Cookies(document.cookie);
    cookies.remove("isLogged");
  }
  return (
    <IdStyled>
      <button onClick={handleCookie}>close</button>
      <p># {channel.name}</p>
    </IdStyled>
  );
}

export default Id;
export function getServerSideProps(context) {
  console.log(context);
  const id = context.params.id; //pathname de la pagina ej : / , ej: login
  const channel = channels[id];
  return {
    props: {
      id: context.params.id,
      channel,
    },
  };
}
