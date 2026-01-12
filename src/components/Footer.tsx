import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    Resources: ["All Collections", "360° Videos", "Interactive Experiences", "Teacher Guides"],
    About: ["About Ocean School", "Our Partners", "Contact Us", "Press"],
    Legal: ["Privacy Policy", "Terms of Use", "Accessibility"],
  };

  return (
    <footer className="py-16 px-6 gradient-deep border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="20" cy="20" r="15" />
                <ellipse cx="20" cy="20" rx="15" ry="6" />
                <path d="M20 5v30" />
              </svg>
              <span className="font-display font-bold text-lg">
                Ocean<br />School
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Free environmental education resources for students in grades 5 to 12.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-display font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Ocean School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              A collaboration between NFB and Dalhousie University
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
