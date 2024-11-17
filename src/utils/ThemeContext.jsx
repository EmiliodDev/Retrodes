import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [ isDarkMode, setIsDarkMode ] = useState(true);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <div className={isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};