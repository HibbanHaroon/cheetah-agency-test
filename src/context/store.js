"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [hoveredAllowed, setHoveredAllowed] = useState(true);

  return (
    <AppContext.Provider
      value={{
        taskList,
        setTaskList,
        orderList,
        setOrderList,
        hoveredAllowed,
        setHoveredAllowed,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
