import { motion } from "framer-motion";
import { Facebook, Youtube, MessageCircle, Anchor } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 gradient-deep border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Marine Dreamer"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="font-display font-bold text-lg block">
                  Marine Dreamer
                </span>
                <span className="text-xs text-muted-foreground font-bangla">
                  স্বপ্ন নয় দায়িত্ব
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-bangla">
              মেরিন একাডেমি এডমিশনে এক বিশ্বাসের নাম।
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-sm mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {[
                { name: "আমাদের সম্পর্কে", href: "#about" },
                { name: "কোর্সসমূহ", href: "#courses" },
                { name: "বইসমূহ", href: "#books" },
                { name: "যোগাযোগ", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-bangla"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-sm mb-4">সোশ্যাল মিডিয়া</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/8801907483862"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1Dv3vqJhxW/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@marinedreamer-157"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-bangla text-center sm:text-left">
              © 2024 Marine Dreamer. সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Anchor className="w-4 h-4" />
              <span className="text-xs font-bangla">সমুদ্র তোমার অপেক্ষায়</span>
            </div>
          </div>
          
          {/* Made by Credit */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Made by{' '}
              <a
                href="https://github.com/mehedyk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline transition-colors"
              >
                mehedy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
