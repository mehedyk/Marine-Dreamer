import { motion } from "framer-motion";
import { ChevronDown, Anchor } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-ocean">
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

      {/* Anchor decorative icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 right-8 md:right-20"
      >
        <Anchor className="w-24 h-24 md:w-40 md:h-40 text-primary" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-foreground drop-shadow-2xl uppercase">
            Marine
            <br />
            Dreamer
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-bangla text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-4"
        >
          স্বপ্ন নয় দায়িত্ব
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-bangla text-lg sm:text-xl text-accent font-medium max-w-md mx-auto"
        >
          সমুদ্র তোমার অপেক্ষায়
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#courses"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:opacity-90 transition-opacity font-bangla"
          >
            কোর্স দেখুন
          </a>
          <a
            href="https://wa.me/8801907483862"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-foreground/30 text-foreground rounded-full font-semibold text-base hover:bg-foreground/10 transition-colors font-bangla"
          >
            যোগাযোগ করুন
          </a>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 mt-8"
      >
        <div className="glass rounded-2xl p-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-display font-bold text-2xl sm:text-4xl text-primary">১০০+</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-bangla mt-1">সফল ক্যাডেট</p>
          </div>
          <div>
            <p className="font-display font-bold text-2xl sm:text-4xl text-accent">২+</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-bangla mt-1">বছরের অভিজ্ঞতা</p>
          </div>
          <div>
            <p className="font-display font-bold text-2xl sm:text-4xl text-primary">২</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-bangla mt-1">প্রকাশিত বই</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-foreground/60 font-bangla">নিচে স্ক্রল করুন</span>
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
