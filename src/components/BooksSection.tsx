import { motion } from "framer-motion";
import BookCard from "./BookCard";
import { books } from "@/data/siteData";

const BooksSection = () => {
  return (
    <section id="books" className="py-16 sm:py-24 px-4 sm:px-6 gradient-deep">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            আমাদের বইসমূহ
          </h2>
          <p className="font-bangla text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            ভর্তি পরীক্ষার প্রস্তুতির জন্য বিশেষভাবে তৈরি আমাদের প্রকাশনা
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <BookCard key={book.title} {...book} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
