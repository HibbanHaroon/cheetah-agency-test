"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  return (
    <AppContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
