import { createContext, useState, useEffect } from "react";

import { useMoralis } from "react-moralis";
export const RobinhoodContext = createContext();

export const RobinhoodProvider = ({ children }) => {
  const [currentAcc, SetcurrentAcc] = useState("");
  const [formattedAcc, setFormattedAcc] = useState("");
  const { isAuthenticated, authenticate, user, logout, Moralis, enableWeb3 } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      const acc = user.get("ethAddress");
      let formatAcc = acc.slice(0, 4) + "..." + acc.slice(-4);
      setFormattedAcc(formatAcc);
      SetcurrentAcc(acc);
    }
  }, [isAuthenticated, enableWeb3]);

  useEffect(() => {
    if (!currentAcc) return;
    (async () => {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress: currentAcc,
        }),
      });

      const data = await response.json();
    })();
  }, [currentAcc]);

  const connectWallet = () => {
    authenticate();
  };

  const signout = () => {
    logout();
  };

  return (
    <RobinhoodContext.Provider
      value={{
        connectWallet,
        signout,
        currentAcc,
        isAuthenticated,
        formattedAcc,
      }}
    >
      {children}
    </RobinhoodContext.Provider>
  );
};
