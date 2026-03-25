import { motion } from "framer-motion";
import headshot from "@/assets/toheeb-headshot.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-80" />
    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-4">
          Website Design &bull; Career Branding &bull; Digital Solutions
        </span>
        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground text-balance mb-6">
          Transforming Websites, Resumes & Digital Presence
        </h1>
        <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
          Powered by <span className="text-foreground font-medium">Wasiu Toheeb</span> — Website Designer & Career Branding Specialist helping you stand out and get real results.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-pill hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href="https://wa.me/2348130270031"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground font-semibold px-8 py-3 rounded-pill hover:bg-muted/30 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="relative flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-72 md:w-80 lg:w-96 flex items-center justify-center">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl" />
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl shadow-background/60">
            <img
              src={headshot}
              alt="Wasiu Toheeb – Founder of RevampingAndOptimizationHub"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
