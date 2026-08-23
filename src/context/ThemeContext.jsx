import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        className={
          darkMode
            ? "dark min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-gray-100 text-gray-900"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}