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
        <script src="https://slacker-rivaldoesteban.herokuapp.com/socket.io/socket.io.js"></script>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
