import { motion } from "framer-motion";
import advocateImg from "@/assets/advocate-portrait.webp";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Background pattern (light on mobile) */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5 hidden sm:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* TEXT */}
        <motion.div
          initial={isMobile ? { opacity: 0 } : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Senior Advocate | Bathinda
            </span>
          </div>

          {/* SEO HEADING */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
            Bharat Bhushan Singla{" "}
            <span className="text-primary block">
              Senior Advocate in Bathinda
            </span>
          </h1>

          {/* KEY INFO */}
          <p className="text-muted-foreground text-lg sm:text-xl mb-6 max-w-xl leading-relaxed">
            23+ Years Experience | MSMED Act Specialist | Civil & Industrial Cases | LIC Panel Advocate (Since 2020)
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* CALL */}
            <a
              href="tel:+919217523100"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-gold-dark text-base font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(42,70%,55%,0.3)]"
            >
              📞 Call Now: +91-9217523100
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919217523100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white text-base font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />

            <img
              src={advocateImg}
              alt="Advocate Bharat Bhushan Singla - Senior Lawyer Bathinda MSMED Expert"
              width={320}
              height={400}
              className="relative rounded-2xl border-2 border-primary/20 shadow-2xl w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;