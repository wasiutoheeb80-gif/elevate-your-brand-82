import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10">
          <h2 className="heading-section text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Ready to Upgrade Your Brand?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need a professional website, a job-winning resume, or a complete brand upgrade, RevampingAndOptimizationHub is here to help. Let's bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/2348130270031"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-pill hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:wasiutoheeb80@gmail.com"
              className="border border-border text-foreground font-semibold px-8 py-3 rounded-pill hover:bg-muted/30 transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
