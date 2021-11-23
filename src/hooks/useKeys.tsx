import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Keys {
  id: number;
  banco: string;
  key: string;
  type: string;
}

interface KeysContext {
  keys: Keys[];
  findKey(id: string | number): Keys;
  register(key: Keys): Promise<Keys>;
}

const KeysContex = createContext({} as KeysContext);

export const KeysProvider: React.FC = ({ children }) => {
  const [keys, setKeys] = useState<Keys[]>([]);

  const findKey = useCallback((id: number) => {
    const find = keys.filter((item) => item.id === id)[0];
    return find;
  }, []);
  const register = useCallback(
    async (key: Keys) => {
      await AsyncStorage.setItem(
        "@Pay-me:keys",
        JSON.stringify([...keys, key])
      );
      setKeys([...keys, key]);
      return key;
    },
    [keys]
  );

  useEffect(() => {
    const carrega = async () => {
      const value = await AsyncStorage.getItem("@Pay-me:keys");
      console.log(value);
      if (value) {
        setKeys(JSON.parse(value));
      }
    };
    carrega();
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
