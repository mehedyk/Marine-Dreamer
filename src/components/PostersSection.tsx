import { motion } from "framer-motion";
import { posters } from "@/data/siteData";

const PostersSection = () => {
  if (!posters.length) return null;

  return (
    <section id="posters" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            পোস্টার
          </h2>
          <p className="font-bangla text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            নতুন আপডেট, ব্যাচ ঘোষণা এবং গুরুত্বপূর্ণ নোটিশ
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((poster, index) => {
            const CardTag: any = poster.link ? "a" : "div";
            const cardProps = poster.link
              ? {
                  href: poster.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.article
                key={`${poster.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <CardTag
                  {...cardProps}
                  className="block glass rounded-2xl overflow-hidden hover:opacity-95 transition-opacity"
                >
                  <img
                    src={poster.image}
                    alt={poster.title}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="p-4">
                    <p className="font-bangla font-semibold text-foreground">{poster.title}</p>
                  </div>
                </CardTag>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostersSection;
