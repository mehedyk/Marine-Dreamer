import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroShark from "@/assets/hero-shark.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-ocean">
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground/10 animate-bubble"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: "-50px",
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 5 + 8}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 pt-32 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-6xl sm:text-8xl md:text-9xl leading-none tracking-tight text-foreground drop-shadow-2xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          DIVE INTO
          <br />
          LEARNING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-xl md:text-2xl text-foreground/80 max-w-md mx-auto"
        >
          Let the ocean be your classroom.
        </motion.p>
      </div>

      {/* Hero Image Container */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-6xl mx-auto px-6 animate-float-slow"
      >
        <div className="relative rounded-[2rem] overflow-hidden shadow-glow">
          <img
            src={heroShark}
            alt="A majestic shark swimming in deep blue ocean water"
            className="w-full h-auto object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-foreground/60">Dive Deeper</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
