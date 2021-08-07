/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import React, { createContext, useState } from "react";
import Head from "next/head";

export const Context = createContext();
function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState();
  const [channelActive, setChannelActive] = useState({
    image: "",
    channelActive: "development",
  });
  return (
    <Context.Provider
      value={{
        context: { value: context, setContext },
        channel: { value: channelActive, setChannelActive },
      }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>Slacker</title>
        <meta
          property="og:title"
          content="Slacker|| Conectate y chatea con tus amigos en tiempo real"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slacker-xi.vercel.app/" />
        <meta
          property="og:image"
          content="https://api.vercel.com/now/files/8646d4b0032d5e06494d3e9e0d0fae9e80d139a5/opengraph.png"
        />
        <meta
          property="og:description"
          content="Trabaja de manera coordinada y toma decisiones más rápido al reunir toda la comunicación laboral en un solo lugar."
        />
        <script src="https://slacker-rivaldoesteban.herokuapp.com/socket.io/socket.io.js"></script>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
