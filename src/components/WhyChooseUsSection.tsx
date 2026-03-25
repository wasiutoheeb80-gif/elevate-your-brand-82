import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "5+ years of proven experience",
  "Performance-focused approach",
  "Clean, modern and professional designs",
  "Fast turnaround time",
  "Reliable communication & support",
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-24 md:py-32">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
          Why Us
        </span>
        <h2 className="heading-section text-3xl md:text-4xl text-foreground mb-10 text-balance">
          Why Choose RevampingAndOptimizationHub
        </h2>
        <div className="space-y-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r}
              className="flex items-center gap-4 glass-card rounded-xl px-6 py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <CheckCircle className="w-5 h-5 text-success shrink-0" />
              <span className="text-foreground font-medium">{r}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUsSection;
