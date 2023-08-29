import React, { createContext, useState } from "react";
import Comp_A from "./Comp_A";

// Comp_A => Comp_B => Comp_C

// Khai báo context ở Comp và export ra bên ngoài để sử dụng
export const ThemeContext = createContext();

export default function UseContext_Comp() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={handleChangeTheme}>Change Theme</button>
        <Comp_A />
      </div>
    </ThemeContext.Provider>
  );
}
