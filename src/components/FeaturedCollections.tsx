import { motion } from "framer-motion";
import CollectionCard from "./CollectionCard";
import plasticPollution from "@/assets/plastic-pollution.jpg";
import coralReef from "@/assets/coral-reef.jpg";
import hammerhead from "@/assets/hammerhead.jpg";
import seaTurtle from "@/assets/sea-turtle.jpg";
import vrOcean from "@/assets/vr-ocean.jpg";

const collections = [
  {
    title: "The problem with plastic",
    description: "Plastic pollution from land is a big problem for life under water. Will you be part of the solution?",
    image: plasticPollution,
    subjects: ["Science", "Geography"],
    resourceCount: 12,
    grades: ["Grade 5-6", "Grade 7-8", "Grade 9+"],
  },
  {
    title: "Diver-city",
    description: "Join Nesha in the coral reefs of Raja Ampat to find out what makes it a hotspot for life!",
    image: coralReef,
    subjects: ["Science", "Geography"],
    resourceCount: 7,
    grades: ["Grade 7-8", "Grade 9+"],
  },
  {
    title: "Secrets of the seamounts",
    description: "How can we protect migratory species like hammerhead sharks?",
    image: hammerhead,
    subjects: ["Science", "Geography"],
    resourceCount: 8,
    grades: ["Grade 5-6", "Grade 7-8", "Grade 9+"],
  },
  {
    title: "Critical conservation",
    description: "Explore the importance of protecting endangered marine species and their habitats.",
    image: seaTurtle,
    subjects: ["Science", "Social Studies"],
    resourceCount: 10,
    grades: ["Grade 5-6", "Grade 7-8"],
  },
  {
    title: "360° videos",
    description: "Dive in to Ocean School's 360° videos. We'll take you places you've never been!",
    image: vrOcean,
    subjects: ["Science", "Career Education"],
    resourceCount: 19,
    grades: ["Grade 5-6", "Grade 7-8", "Grade 9+"],
  },
  {
    title: "Defending diversity",
    description: "Visit the Great Barrier Reef to learn about coral and how we can protect biodiversity.",
    image: coralReef,
    subjects: ["Geography", "Science"],
    resourceCount: 7,
    grades: ["Grade 7-8", "Grade 9+"],
  },
];

const FeaturedCollections = () => {
  return (
    <section id="resources" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of immersive ocean learning experiences
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.title} {...collection} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
