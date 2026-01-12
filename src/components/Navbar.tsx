import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Educational Resources", href: "#resources" },
    { name: "Community", href: "#community" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Menu Button */}
        <Button
          variant="pill"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2"
        >
          <Menu className="w-5 h-5" />
          <span className="hidden sm:inline">Explore our resources</span>
        </Button>

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <svg
            viewBox="0 0 40 40"
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="20" cy="20" r="15" className="text-foreground" />
            <ellipse cx="20" cy="20" rx="15" ry="6" className="text-foreground" />
            <path d="M20 5v30" className="text-foreground" />
          </svg>
          <span className="font-display font-bold text-lg tracking-tight">
            Ocean<br />School
          </span>
        </a>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
          >
            Fr
          </a>
          <button className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass mt-2 mx-6 rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
