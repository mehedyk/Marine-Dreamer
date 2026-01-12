import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="relative py-24 px-6 gradient-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              What is Ocean School?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Ocean School</strong> is a free environmental 
              education resource for students in grades 5 to 12. Our inspiring and immersive 
              multimedia resources featuring linear and 360˚ videos, VR/AR, interactive media 
              and hands-on projects and activities are offered in English and French.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our cross-curricular content spans science, social studies, language arts and more!
            </p>
            <Button variant="ocean" size="lg">
              Explore our resources
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                Explore the ocean through immersive multimedia lessons created by{" "}
                <span className="text-accent">scientists</span>,{" "}
                <span className="text-primary">educators</span>, and{" "}
                <span className="text-accent">storytellers</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;