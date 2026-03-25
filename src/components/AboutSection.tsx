import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
          About
        </span>
        <h2 className="heading-section text-3xl md:text-4xl text-foreground mb-6 text-balance">
          About RevampingAndOptimizationHub
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            RevampingAndOptimizationHub is a results-driven digital service brand focused on helping individuals and businesses improve their online presence and professional positioning.
          </p>
          <p>
            Founded by <span className="text-foreground font-medium">Wasiu Toheeb</span>, a Website Designer and Career Branding Specialist with over 5 years of experience, the brand delivers high-quality websites, resumes, and digital solutions that are built to perform—not just look good.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
