export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextProps {
  theme: string;
  toggleBodyTheme: () => void;
}