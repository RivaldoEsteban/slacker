/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Logo from "../components/logo/logo";
import Sidebar from "../components/sidebar/index";
import Main from "../components/main/main";

const IndexStyled = styled.div`
  display: grid;
  inline-size: 100vw;
  block-size: 100vh;
  grid-template-columns: 4.12rem 16.25rem 1fr;
  grid-template-rows: 3.75rem 1fr;
  grid-template-areas: "logo channelName channelChat" "- channelName channelChat";
`;

function Home() {
  return (
    <IndexStyled className="">
      <Logo />
      <Sidebar />
      <Main />
    </IndexStyled>
  );
}

export default Home;

export function getServerSideProps(context) {
  if (context.req.cookies.isLogged === "true") {
    return {
      props: {},
    };
  }
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
