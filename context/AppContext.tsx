import React, { createContext, useContext, useState } from "react";

const initialState = {
  isLoggedIn: false,
  appSettings: {
    theme: "light",
    language: "en",
  },
  toggleLogin: () => { console.log('toggle login not defined') },
  setAppSettings: () => { console.log('set app settings not defined') },
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialState.isLoggedIn);

  const [appSettings, setAppSettings] = useState(initialState.appSettings);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  // Expose state and methods via context value
  const contextValue = {
    isLoggedIn,
    toggleLogin,
    appSettings,
    setAppSettings,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
