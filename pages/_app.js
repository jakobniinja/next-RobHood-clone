import { MoralisProvider, useMoralis } from "react-moralis";
import { useEffect } from "react";
import { RobinhoodProvider } from "../context/RobinHoodContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return (
    <MoralisProvider serverUrl="https://ezaodihvvpbf.usemoralis.com:2053/server" appId="2AOZEGIblitOcWdkYvFrDwPQ7UW70zZgn52IqxJ9" >
    <RobinhoodProvider>
      <Component {...pageProps} />
    </RobinhoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
