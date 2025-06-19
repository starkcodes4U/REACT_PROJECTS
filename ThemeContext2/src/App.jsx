import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

const ThemeToggle = () => {
const { theme, toggleTheme } = useTheme();

return (
<div>
<h2>Current Theme: {theme.toUpperCase()}</h2>
<button onClick={toggleTheme}>
Switch to {theme === "light" ? "Dark" : "Light"} Theme
</button>
</div>
);
};

const App = () => {
return (
<ThemeProvider>
<ThemeToggle />
</ThemeProvider>
);
};

export default App;