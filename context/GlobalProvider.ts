import React, { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../lib/appwrite";

interface GlobalContextType {
  isLogged: boolean;
  user: any;
  loading: boolean;
}

const GlobalContext = createContext({
  isLogged: false,
  user: null,
  loading: false,
});

const GlobalProvider = ({ children }: { children: any }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUserHandler = async () => {
    try {
      const res = await getCurrentUser();
      if (res) {
        setIsLogged(true);
        setUser(res);
      } else {
        setIsLogged(false);
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCurrentUserHandler();
  }, []);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);
