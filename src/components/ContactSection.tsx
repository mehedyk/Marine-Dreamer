import { motion } from "framer-motion";
import { Phone, Facebook, Youtube, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            যোগাযোগ করুন
          </h2>
          <p className="font-bangla text-base sm:text-lg text-muted-foreground">
            কোর্স বা বই সম্পর্কে জানতে আমাদের সাথে যোগাযোগ করুন
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-6"
        >
          {/* WhatsApp - Primary */}
          <a
            href="https://wa.me/8801907483862"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">WhatsApp</p>
              <p className="text-muted-foreground font-bangla text-sm">01907483862</p>
            </div>
            <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </a>

          {/* Social Links */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.facebook.com/share/1Dv3vqJhxW/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[hsl(221,44%,41%)] flex items-center justify-center shrink-0">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Facebook Page</p>
                <p className="text-muted-foreground text-xs font-bangla">আমাদের ফলো করুন</p>
              </div>
            </a>

            <a
              href="https://youtube.com/@marinedreamer-157"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[hsl(0,100%,40%)] flex items-center justify-center shrink-0">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">YouTube</p>
                <p className="text-muted-foreground text-xs font-bangla">ভিডিও দেখুন</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 font-bangla text-lg sm:text-xl text-primary font-semibold"
        >
          স্বপ্ন নয় দায়িত্ব — সমুদ্র তোমার অপেক্ষায়।
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
