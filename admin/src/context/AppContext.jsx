import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const val = {};
  return (
    <AppContext.Provider val={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
