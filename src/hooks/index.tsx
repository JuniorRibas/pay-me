import React from "react";

import { KeysProvider } from "./useKeys";

const AppProvider: React.FC = ({ children }) => {
  return <KeysProvider>{children}</KeysProvider>;
};

export default AppProvider;
