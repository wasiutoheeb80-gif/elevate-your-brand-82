import { motion } from "framer-motion";
import { Phone, Mail, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
          Get In Touch
        </span>
        <h2 className="heading-section text-3xl md:text-4xl text-foreground mb-10">
          Contact Us
        </h2>
        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://wa.me/2349125880785"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            +2349125880785
          </a>
          <a
            href="mailto:wasiutoheeb2025@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5 text-primary" />
            wasiutoheeb2025@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/wasiu-toheeb-91469a307/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
