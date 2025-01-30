import React, { createContext, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Use the use-local-storage hook to manage the theme
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = prefersDarkMode ? 'dark' : 'light';
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Store the theme in cookies as well
    Cookies.set('theme', theme, { expires: 365 });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
