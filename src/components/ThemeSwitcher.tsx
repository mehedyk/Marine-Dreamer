import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useTheme, themes } from "@/contexts/ThemeContext";
import { useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    ocean: "bg-[hsl(199,89%,48%)]",
    "navy-gold": "bg-[hsl(45,90%,55%)]",
    "teal-coral": "bg-[hsl(16,85%,60%)]",
    "dark-electric": "bg-[hsl(210,100%,60%)]",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-lg"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute bottom-16 right-0 glass rounded-xl p-3 min-w-[160px]"
        >
          <p className="text-xs text-muted-foreground mb-2 px-2">থিম বাছাই করুন</p>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                theme === t.id ? "bg-primary/20" : "hover:bg-muted"
              }`}
            >
              <span className={`w-4 h-4 rounded-full ${themeColors[t.id]}`} />
              <span className="text-sm">{t.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
