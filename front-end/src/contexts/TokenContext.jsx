import { createContext, useState } from "react";
import React from "react";

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export default TokenContext;
