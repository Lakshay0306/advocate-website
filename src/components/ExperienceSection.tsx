import { motion } from "framer-motion";
import { Scale, Gavel, Award, Landmark, ShieldCheck } from "lucide-react";

const milestones = [
  { icon: Scale, year: "2003", title: "23+ Years of Distinguished Legal Experience", desc: "Two decades of dedicated practice in civil, MSMED, and industrial law" },
  { icon: Landmark, year: "2003", title: "Practicing at District Court, Bathinda", desc: "Established presence and strong reputation at Bathinda District Courts" },
  { icon: Award, year: "2020", title: "LIC Panel Advocate", desc: "Empaneled as LIC advocate, handling insurance claims and disputes" },
  { icon: Gavel, year: "Ongoing", title: "Proven Success in MSMED & Industrial Cases", desc: "Recognized for expertise in MSME-related industrial legal disputes" },
  { icon: ShieldCheck, year: "Ongoing", title: "Strong & Commanding Courtroom Representation", desc: "Known for strategic arguments and practical legal approach" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-secondary relative overflow-hidden">
    {/* Subtle background accent */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Track Record</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
          Experience & Milestones
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Timeline style layout */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

        <div className="space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex gap-5 sm:gap-8 group"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(42,70%,55%,0.15)] transition-all duration-300">
                  <m.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 p-5 sm:p-6 rounded-xl bg-card border border-border group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-[0_4px_24px_hsl(42,70%,55%,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider w-fit">
                    {m.year}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">{m.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
