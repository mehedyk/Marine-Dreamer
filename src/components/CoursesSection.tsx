import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "অক্টোপাস ৩.০",
    subtitle: "বাংলাদেশ মেরিন একাডেমি ক্যাডেট হওয়ার নির্ভরযোগ্য যাত্রা",
    price: "৫,০০০ টাকা",
    highlights: [
      { label: "সফল ক্যাডেট", value: "১০০+" },
      { label: "অভিজ্ঞতা", value: "২ বছর" },
    ],
    features: [
      "পূর্ণাঙ্গ সিলেবাস কভার",
      "ভাইভা + লিখিত প্রস্তুতি",
      "নিয়মিত ক্লাস ও এক্সাম",
      "মডেল টেস্ট ও এনালাইসিস",
      "বাস্তব অভিজ্ঞতা থেকে দেওয়া টিপস",
      "মেরিন একাডেমির এক্স ক্যাডেট দ্বারা পরিচালিত",
    ],
  },
  {
    title: "নাবিক যাত্রা ২.০",
    subtitle: "ন্যাশনাল মেরিটাইম একাডেমি (Rating) ভর্তি প্রস্তুতি কোর্স",
    price: "৪,০০০ টাকা",
    highlights: [
      { label: "সফল শিক্ষার্থী", value: "৫০+" },
      { label: "অভিজ্ঞতা", value: "১ বছর" },
    ],
    features: [
      "পূর্ণাঙ্গ লিখিত প্রস্তুতি",
      "ভাইভা গাইডলাইন ও প্র্যাকটিস",
      "নিয়মিত ক্লাস ও পরীক্ষা",
      "মডেল টেস্ট ও বিশ্লেষণ",
      "বাস্তব অভিজ্ঞতা থেকে টিপস",
      "মেরিন একাডেমির এক্স ক্যাডেট দ্বারা পরিচালিত",
    ],
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            আমাদের কোর্সসমূহ
          </h2>
          <p className="font-bangla text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            মেরিন একাডেমিতে ভর্তির জন্য সেরা প্রস্তুতি নিন আমাদের পেইড কোর্সগুলোতে
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.title} {...course} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-accent font-bangla text-base sm:text-lg font-medium"
        >
          ⚓ সীমিত সিট | আগে আসলে আগে সুযোগ
        </motion.p>
      </div>
    </section>
  );
};

export default CoursesSection;
