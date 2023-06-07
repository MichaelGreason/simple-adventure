import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
