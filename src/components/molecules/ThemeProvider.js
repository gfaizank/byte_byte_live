  'use client'
  import React, { createContext, useContext, useEffect, useState } from 'react';

  // Step 1: Create a context
  export const ThemeContext = createContext();

  // Step 2: Create a provider component
  export const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(() => {
      if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
      } else {
        return 'light';
      }
    });

    // Function to set theme and store it in local storage
    const setThemeWithStorage = newTheme => {
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, setTheme: setThemeWithStorage }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  // Step 3: Create a hook to consume the theme context
  export const useTheme = () => useContext(ThemeContext);
