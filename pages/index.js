/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
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
  @media (max-width: 850px) {
    grid-template-columns: 4.12rem 1fr;
    grid-template-areas: "logo channelActive" "- channelActive";
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas: "channelActive" " channelActive";
  }
`;

function Home() {
  const [widthPage, setWidthPage] = useState();
  const [channelActive, setChannelActive] = useState(true);
  const [sidebarActive, setSidebarActive] = useState(true);
  const [hiddenLogo, setHiddenLogo] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", currentWidthPage);
    return () => {
      window.removeEventListener("resize", currentWidthPage);
    };
  }, []);
  function currentWidthPage() {
    setWidthPage(window.outerWidth);
  }

  return (
    <IndexStyled>
      {hiddenLogo ? (
        <Logo widthPage={widthPage} setHiddenLogo={setHiddenLogo} />
      ) : null}
      {channelActive ? (
        <Main
          sidebarActive={setSidebarActive}
          currentChaneel={setChannelActive}
          widthPage={widthPage}
        />
      ) : null}
      {sidebarActive ? (
        <Sidebar
          setHiddenLogo={setHiddenLogo}
          sidebarActive={setSidebarActive}
          currentChaneel={setChannelActive}
          widthPage={widthPage}
        />
      ) : null}
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
