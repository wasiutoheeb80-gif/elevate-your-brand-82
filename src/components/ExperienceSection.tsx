import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder – RevampingAndOptimizationHub",
    period: "2020 – Present",
    desc: "Web Design Specialist (Self-Employed via Hostinger). Built and optimized websites for multiple clients.",
  },
  {
    role: "Career Document Specialist – ResumeNow",
    period: "Present",
    desc: "Build professional resumes, CVs, cover letters and other career documents for clients on the ResumeNow platform.",
  },
  {
    role: "Web Designer – Lovable",
    period: "Present",
    desc: "Designed responsive and conversion-focused websites.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
          Track Record
        </span>
        <h2 className="heading-section text-3xl md:text-4xl text-foreground mb-10 text-balance">
          Experience & Background
        </h2>

        <div className="relative border-l-2 border-primary/20 pl-8 space-y-10">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background" style={{ marginTop: 4 }} />
              <span className="text-xs text-primary font-medium tracking-wider uppercase">
                {e.period}
              </span>
              <h3 className="font-display font-semibold text-foreground mt-1 mb-2">
                {e.role}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
