import "../styles/globals.css";
import React, { createContext } from "react";
import Head from "next/head";

export const Context = createContext();
function MyApp({ Component, pageProps }) {
  return (
    <Context.Provider value="">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>Slacker</title>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
