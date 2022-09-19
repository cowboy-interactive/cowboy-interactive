import { useContext, createContext, useState } from "react";
import { themes } from "./variables";

const initialStates = {
  theme: "default",
  setTheme: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState(initialStates.theme);

  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <style jsx global>
        {`
          body {
            background-color: ${themes[theme].primary};
            color: ${themes[theme].secondary};
          }
        `}
      </style>
      {children}
    </MyContext.Provider>
  );
}

export const useTheme = () => {
  const { theme, setTheme } = useContext(MyContext);
  return { theme, setTheme };
};
