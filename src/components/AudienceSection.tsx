import { motion } from "framer-motion";
import { Users, GraduationCap, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Users,
    title: "Parents",
    description: "Support your child's ocean learning journey at home with engaging activities and resources.",
    href: "#parents",
  },
  {
    icon: GraduationCap,
    title: "Educators",
    description: "Access curriculum-aligned lesson plans, activities, and multimedia content for your classroom.",
    href: "#educators",
  },
  {
    icon: Compass,
    title: "Explorers",
    description: "Dive into self-guided adventures and discover the wonders of our ocean planet.",
    href: "#explorers",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 px-6 gradient-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Learn what Ocean School has to offer!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 h-full flex flex-col items-center text-center hover:shadow-glow transition-shadow duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <audience.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {audience.description}
                </p>
                <Button variant="outline" className="border-foreground/20 hover:bg-foreground/10">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
