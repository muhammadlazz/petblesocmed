import { createContext, useState, useEffect, ReactNode } from "react";

// Tipe untuk context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Default value untuk context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Simpan tema di localStorage supaya tetap tersimpan saat refresh
  const getInitialTheme = (): string => localStorage.getItem("theme") || "dark";

  const [theme, setTheme] = useState<string>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};