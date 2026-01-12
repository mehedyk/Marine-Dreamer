import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  subjects: string[];
  resourceCount: number;
  grades: string[];
  index: number;
}

const CollectionCard = ({
  title,
  description,
  image,
  subjects,
  resourceCount,
  grades,
  index,
}: CollectionCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl gradient-card shadow-card cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        
        {/* Grades */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {grades.map((grade) => (
            <Badge key={grade} variant="secondary" className="glass text-xs">
              {grade}
            </Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {subjects.map((subject) => (
            <span key={subject} className="text-xs text-primary font-medium">
              {subject}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        
        <span className="text-sm font-medium text-accent">
          {resourceCount} resources
        </span>
      </div>
    </motion.article>
  );
};

export default CollectionCard;
