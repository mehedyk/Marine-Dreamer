import { motion } from "framer-motion";
import founderImage from "@/assets/founder-rifat.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 gradient-deep">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl" />
              <img
                src={founderImage}
                alt="Md Rifat Hasan - Founder of Marine Dreamer"
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl object-cover shadow-card"
              />
            </div>
          </motion.div>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Md Rifat Hasan
            </h2>
            <p className="text-accent font-semibold mb-4 font-bangla text-lg">
              Bangladesh Marine Academy, Pabna
              <br />
              <span className="text-muted-foreground">3rd Batch (58)</span>
            </p>
            <div className="glass rounded-2xl p-5 sm:p-6">
              <p className="font-bangla text-base sm:text-lg leading-relaxed text-foreground/90">
                মেরিন একাডেমি এডমিশনে এক বিশ্বাসের নাম <span className="text-primary font-semibold">Marine Dreamer</span>। মেরিন একাডেমির এক্স অফিসার ক্যাডেট দ্বারা সরাসরি পরিচালিত। এডমিশন থেকে একাডেমি যাওয়ার পথকে সহজ করতে তোমাদের সকলের সহযোগিতা কাম্য।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;