import { motion } from "framer-motion";
import { Play } from "lucide-react";
import seaTurtle from "@/assets/sea-turtle.jpg";

const VideoSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Watch Trailer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-glow"
        >
          <img
            src={seaTurtle}
            alt="Ocean School Trailer"
            className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors" />
          
          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-foreground flex items-center justify-center shadow-glow"
          >
            <Play className="w-10 h-10 text-background ml-1" fill="currentColor" />
          </motion.button>

          {/* Label */}
          <div className="absolute bottom-6 left-6 glass rounded-full px-4 py-2">
            <span className="text-sm font-medium">PLAY VIDEO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
