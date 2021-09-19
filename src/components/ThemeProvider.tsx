import React, { useState } from "react";

import { ThemeProviderProps, ThemeContextProps } from '../types/themeProvider';

export const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('light')

   const toggleBodyTheme: () => void = () => {
    if(theme === 'light') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      setTheme('dark');
    } else if(theme === 'dark') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      setTheme('light');
    }
    console.log(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleBodyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
  };