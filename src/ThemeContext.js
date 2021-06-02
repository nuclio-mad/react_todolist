import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeContextWrapper = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') return setTheme('dark');
    setTheme('light');
  }
  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}