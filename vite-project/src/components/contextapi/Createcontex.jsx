import { createContext, useContext, useState, useEffect } from "react";
import { getapi } from "../../api";

const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    getapi()
      .then((data) => SetData(data))
      .catch((error) => alert(error));
  }, []);

  return (
    <MyContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useApicontext = () => useContext(MyContext);
