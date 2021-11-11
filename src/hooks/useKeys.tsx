import React, { createContext, useContext, useCallback, useState } from "react";

interface Keys {
  id: number;
  banco: string;
  key: string;
  type: string;
}

interface KeysContext {
  keys: Keys[];
  findKey(id: string | number): Keys;
  register(key: Keys): Keys;
}

const KeysContex = createContext({} as KeysContext);

export const KeysProvider: React.FC = ({ children }) => {
  const [keys, setKeys] = useState<Keys[]>([]);

  const findKey = useCallback((id: number) => {
    const find = keys.filter((item) => item.id === id)[0];
    return find;
  }, []);
  const register = useCallback((key: Keys) => {
    setKeys((old) => [...old, key]);
    return key;
  }, []);

  return (
    <KeysContex.Provider value={{ keys, findKey, register }}>
      {children}
    </KeysContex.Provider>
  );
};

export const useKeys = () => {
  const context = useContext(KeysContex);

  if (!context) {
    throw new Error("useKeys is being used outside of KeysContex");
  }
  return context;
};
