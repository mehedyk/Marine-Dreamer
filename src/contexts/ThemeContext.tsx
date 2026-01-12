import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeName = "ocean" | "navy-gold" | "teal-coral" | "dark-electric";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: { id: ThemeName; name: string; nameEn: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  { id: "ocean" as ThemeName, name: "সমুদ্র নীল", nameEn: "Ocean Blue" },
  { id: "navy-gold" as ThemeName, name: "নেভি গোল্ড", nameEn: "Navy Gold" },
  { id: "teal-coral" as ThemeName, name: "টিল কোরাল", nameEn: "Teal Coral" },
  { id: "dark-electric" as ThemeName, name: "ইলেকট্রিক", nameEn: "Electric" },
];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem("marine-dreamer-theme");
    return (saved as ThemeName) || "ocean";
  });

  useEffect(() => {
    localStorage.setItem("marine-dreamer-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
