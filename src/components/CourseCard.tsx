import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

interface CourseCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  highlights: { label: string; value: string }[];
  index: number;
}

const CourseCard = ({
  title,
  subtitle,
  price,
  features,
  highlights,
  index,
}: CourseCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl gradient-card shadow-card"
    >
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-border/30">
        <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 text-primary">
          {title}
        </h3>
        <p className="font-bangla text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-3 p-5 sm:p-6 border-b border-border/30">
        {highlights.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display font-bold text-lg sm:text-xl text-accent">
              {item.value}
            </p>
            <p className="text-xs text-muted-foreground font-bangla mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="p-5 sm:p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="font-bangla text-sm text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div>
            <p className="text-xs text-muted-foreground font-bangla">কোর্স ফি</p>
            <p className="font-display font-bold text-xl sm:text-2xl text-primary">{price}</p>
          </div>
          <a
            href="https://wa.me/8801907483862"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span className="font-bangla">যোগাযোগ</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default CourseCard;
