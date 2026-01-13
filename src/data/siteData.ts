export type CourseHighlight = {
  label: string;
  value: string;
};

export type Course = {
  title: string;
  subtitle: string;
  price: string;
  highlights: CourseHighlight[];
  features: string[];
};

export type Book = {
  title: string;
  description: string;
  targetAudience: string;
  features: string[];
};

export type Poster = {
  title: string;
  image: string; // Tip: import a local asset and pass it here.
  link?: string; // Optional: e.g. WhatsApp link or Google Drive PDF link
};

/**
 * ✅ Content customization (edit this file)
 * - Add/Remove/Update courses, books, and posters here.
 * - Everything will update automatically across the site.
 */

export const courses: Course[] = [
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

export const books: Book[] = [
  {
    title: "নাবিক যাত্রা",
    description:
      "ন্যাশনাল মেরিটাইম ইনস্টিটিউটে ভর্তি পরীক্ষার্থীদের জন্য সম্পূর্ণ গাইডবুক",
    targetAudience: "NMI ভর্তি পরীক্ষার্থীদের জন্য",
    features: [
      "সাধারণ জ্ঞান, ইংরেজি, গণিত",
      "সকল টপিক বেসিক থেকে আলাদাভাবে",
      "প্রতি টপিকের পর প্র্যাকটিস অংশ",
      "মডেল টেস্ট",
      "বিগত সালের প্রশ্ন এনালাইসিস",
    ],
  },
  {
    title: "মেরিন এনালাইসিস",
    description:
      "মেরিন একাডেমি ভর্তি পরীক্ষার্থীদের জন্য আপডেট মান বন্টনের আলোকে তৈরি",
    targetAudience: "মেরিন একাডেমি ভর্তির জন্য",
    features: [
      "সাধারণ জ্ঞান, ইংরেজি, গণিত",
      "সকল টপিক বেসিক থেকে আলাদাভাবে",
      "প্রতি টপিকের পর প্র্যাকটিস অংশ",
      "মডেল টেস্ট",
      "অনলাইন এক্সাম দেওয়ার সুযোগ",
      "বিগত সালের প্রশ্ন এনালাইসিস",
    ],
  },
];

/**
 * Posters (optional)
 * - Keep empty to hide the Posters section + nav link.
 * - To add: upload an image to src/assets, import it here, and push an item.
 *
 * Example:
 * import poster1 from "@/assets/poster-1.jpg";
 * export const posters: Poster[] = [{ title: "Batch 2026 ভর্তি চলছে", image: poster1, link: "https://wa.me/8801907483862" }];
 */
export const posters: Poster[] = [];
