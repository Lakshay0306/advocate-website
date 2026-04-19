import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "23+ Years", desc: "Legal Practice" },
  { icon: BookOpen, label: "MSMED Expert", desc: "Industrial Cases" },
  { icon: Award, label: "LIC Panel", desc: "Since 2020" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">About</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
          Adv. Bharat Bhushan Singla
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <h.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">{h.label}</h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-muted-foreground text-lg leading-relaxed text-center">
          Adv. Bharat Bhushan Singla has been practicing at the District Court, Bathinda since 2003, bringing over 23 years of distinguished legal experience. He specializes in civil litigation, MSMED Act cases, and industrial legal matters, offering sharp expertise honed through decades of courtroom practice.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed text-center mt-4">
          Since 2020, he has been proudly serving as a LIC Panel Advocate, successfully handling complex insurance-related cases. His achievements in MSME-related industrial disputes have earned him significant recognition among peers and clients alike. Known for his commanding courtroom presence, practical legal approach, and unwavering dedication, Adv. Singla is a trusted legal advisor for individuals and businesses seeking robust representation.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
