import { motion } from "framer-motion";
import { Scale, Factory, Shield, Building2, HeartHandshake } from "lucide-react";

const services = [
  { icon: Scale, title: "Civil Litigation", desc: "Comprehensive representation in civil disputes, ensuring your rights are protected with strategic legal solutions." },
  { icon: Factory, title: "MSMED Act Cases", desc: "Expert handling of MSMED Act matters, helping micro, small, and medium enterprises navigate complex legal frameworks." },
  { icon: Building2, title: "Industrial Legal Matters", desc: "Specialized counsel for industrial disputes, labor issues, and regulatory compliance across sectors." },
  { icon: Shield, title: "Corporate Legal Advisory", desc: "Strategic guidance for businesses on compliance, contracts, and corporate governance matters." },
  { icon: HeartHandshake, title: "Insurance & LIC Panel Cases", desc: "Dedicated representation as an empaneled LIC advocate, handling insurance claims and disputes since 2020." },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Practice Areas</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
          Legal Services
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(42,70%,55%,0.08)]"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
