const Footer = () => (
  <footer className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span
        className="text-[8vw] font-display font-extrabold tracking-tighter uppercase"
        style={{
          WebkitTextStroke: "1px hsl(var(--muted))",
          WebkitTextFillColor: "transparent",
          opacity: 0.15,
        }}
      >
        REVAMP
      </span>
    </div>
    <div className="container relative z-10 text-center">
      <p className="text-muted-foreground text-sm">
        © 2026 RevampingAndOptimizationHub | Wasiu Toheeb
      </p>
    </div>
  </footer>
);

export default Footer;
