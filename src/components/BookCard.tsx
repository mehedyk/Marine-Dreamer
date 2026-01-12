import { motion } from "framer-motion";
import { BookOpen, Phone } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  features: string[];
  targetAudience: string;
  index: number;
}

const BookCard = ({
  title,
  description,
  features,
  targetAudience,
  index,
}: BookCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl glass shadow-card"
    >
      {/* Book Icon Placeholder */}
      <div className="h-40 sm:h-48 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10">
        <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 text-primary/60" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full font-bangla mb-3">
          {targetAudience}
        </span>
        
        <h3 className="font-display font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="font-bangla text-sm text-muted-foreground mb-4">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-5">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm font-bangla text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/8801907483862"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full font-medium text-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="font-bangla">বই কিনতে যোগাযোগ করুন</span>
        </a>
      </div>
    </motion.article>
  );
};

export default BookCard;
