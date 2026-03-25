import { motion } from "framer-motion";
import { Globe, FileText, Megaphone, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    items: ["Business websites", "E-commerce stores", "Landing pages"],
  },
  {
    icon: FileText,
    title: "Resume & Career Optimization",
    items: ["Resume writing", "CV review", "LinkedIn optimization"],
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    items: ["Content writing", "Brand strategy", "Advertising"],
  },
  {
    icon: Palette,
    title: "Creative Design",
    items: ["Logo design", "Presentation design", "Document formatting"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
          What We Do
        </span>
        <h2 className="heading-section text-3xl md:text-4xl text-foreground">
          Our Services
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="glass-card rounded-xl p-6 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-3 text-sm">
              {s.title}
            </h3>
            <ul className="space-y-1.5">
              {s.items.map((item) => (
                <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
