import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState("light");

const toggleTheme = () => {
setTheme((prev) => (prev === "light" ? "dark" : "light"));
};

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
  <div className={`app ${theme}`}>{children}</div>
</ThemeContext.Provider>
);
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);