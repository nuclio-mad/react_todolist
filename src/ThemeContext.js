import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeContextWrapper = ({children}) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') return setTheme('dark');
    setTheme('light');
  }
  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}