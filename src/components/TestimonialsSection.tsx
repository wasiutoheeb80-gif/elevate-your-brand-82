import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    role: "Small Business Owner, USA",
    text: "RevampingAndOptimizationHub completely transformed my website. My business has seen a 40% increase in online inquiries since the redesign. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Job Seeker, UK",
    text: "Wasiu rewrote my resume and optimized my LinkedIn profile. Within two weeks, I started getting interview calls. His career branding service is a game-changer.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Startup Founder, Canada",
    text: "Professional, fast, and affordable. The landing page they built for my product launch was clean, modern, and converted really well. Will definitely work with them again.",
    rating: 5,
  },
  {
    name: "Elena K.",
    role: "Freelancer, Germany",
    text: "I needed a full brand identity — logo, website, and content. Toheeb delivered everything on time and exceeded my expectations. Five stars!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

    <div className="container relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
          Testimonials
        </span>
        <h2 className="heading-section text-3xl md:text-4xl text-foreground text-balance">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass-card rounded-2xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Quote className="w-8 h-8 text-primary/40" />
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">
              "{t.text}"
            </p>
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
