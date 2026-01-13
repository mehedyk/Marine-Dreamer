import { motion } from "framer-motion";
import { useTheme, themes, type ThemeName } from "@/contexts/ThemeContext";

const QuickThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].id as ThemeName);
  };

  const themeColors: Record<ThemeName, string> = {
    ocean: "bg-[hsl(199,89%,48%)]",
    "navy-gold": "bg-[hsl(45,90%,55%)]",
    "teal-coral": "bg-[hsl(16,85%,60%)]",
    "dark-electric": "bg-[hsl(210,100%,60%)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={cycleTheme}
      className="fixed top-20 right-4 z-50 w-10 h-10 rounded-full glass flex items-center justify-center shadow-lg group"
      aria-label="Toggle theme"
      title="Switch theme"
    >
      <span className={`w-5 h-5 rounded-full ${themeColors[theme]} group-hover:scale-110 transition-transform`} />
    </motion.button>
  );
};

export default QuickThemeToggle;
