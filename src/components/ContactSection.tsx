import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, ExternalLink } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "+91-9217523100", href: "tel:+919217523100", accent: true, subtitle: "Call Now" },
  {
  icon: Mail,
  label: "advocatebbsmaur@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&to=advocatebbsmaur@gmail.com&su=Legal%20Consultation&body=Hello%20Sir,%20I%20would%20like%20to%20consult.",
  accent: false,
  subtitle: "Email Us"
}, { icon: MapPin, label: "Chamber No. 828, District Court Complex, Bathinda", href: "https://www.google.com/maps/search/District+Court+Complex+Bathinda+Punjab", accent: false, subtitle: "Visit Office" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/bharat-bhushan-singla-141baa401/", accent: false, subtitle: "Connect Online" },
];

const handleLinkClick = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    window.location.href = href;
  } else {
    window.open(href, "_blank", "noopener,noreferrer");
  }
};

const ContactSection = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">Get In Touch</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
          Contact
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm sm:text-base">
          Reach out for expert legal consultation in MSMED, Industrial, and Insurance matters.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {/* Contact cards */}
        <div className="space-y-4">
          {contactInfo.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              onClick={(e) => handleLinkClick(e, c.href)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, x: 6 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-4 sm:p-5 rounded-xl border cursor-pointer transition-all duration-300 group ${
                c.accent
                  ? "bg-primary/10 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_hsl(42,70%,55%,0.15)] hover:bg-primary/15"
                  : "bg-card border-border hover:border-primary/40 hover:shadow-[0_4px_20px_hsl(42,70%,55%,0.08)] hover:bg-primary/5"
              }`}
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                c.accent
                  ? "bg-primary/20 group-hover:bg-primary/30 group-hover:shadow-[0_0_15px_hsl(42,70%,55%,0.2)]"
                  : "bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_10px_hsl(42,70%,55%,0.1)]"
              }`}>
                <c.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">{c.subtitle}</span>
                <span className="block text-foreground text-sm sm:text-base font-medium break-all leading-tight mt-0.5">{c.label}</span>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
            </motion.a>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          <div className="rounded-xl overflow-hidden border border-border h-64 sm:h-80 lg:h-[calc(100%-48px)]">
            <iframe
              title="District Court Complex, Bathinda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.0!2d74.9408!3d30.2104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b5640e1a0a1d%3A0x823456789abcdef0!2sDistrict%20Courts%2C%20Bathinda%2C%20Punjab%20151001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/search/District+Court+Complex+Bathinda+Punjab"
            onClick={(e) => handleLinkClick(e, "https://www.google.com/maps/search/District+Court+Complex+Bathinda+Punjab")}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline cursor-pointer transition-all duration-300 hover:gap-3"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
            <ExternalLink className="h-3 w-3" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
