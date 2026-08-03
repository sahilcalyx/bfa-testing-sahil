import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const EventHostSection = () => {
  const sectionRef = useRef(null);

  // Framer Motion scroll progress hook
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transform mapping for smooth scroll velocity movement
  const xRow1 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ["-25%", "5%"]);

  return (
    <section 
      ref={sectionRef} 
      aria-label="Event Host Section"
      className="relative w-full bg-[#030508] text-white pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Gradient & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_80%_30%,rgba(200,16,46,0.18)_0%,transparent_55%),radial-gradient(circle_at_20%_80%,rgba(200,16,46,0.12)_0%,transparent_50%)]" />

      {/* Main Content Grid (Top Layer - z-[10]) */}
      <div className="relative z-[10] grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start max-w-7xl w-full mx-auto mb-4 md:mb-6">
        
        {/* Top-Left Content Paragraph with Framer Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-7 max-w-xl pt-2"
        >
          {/* Subheading Tag with Crimson Line */}
          <div className="flex items-center gap-2.5 text-xs font-extrabold tracking-[0.2em] text-[#c8102e] uppercase mb-2">
            <span className="w-6 h-0.5 bg-[#c8102e] inline-block" />
            <span>BFA 2026 HIGHLIGHT</span>
          </div>

          {/* Section Title in Golden */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[#d4af37] mb-1 leading-tight">
            EVENT HOST
          </h2>

          {/* Host Name Heading - Prominent Bright White */}
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
            Stephen Simmons
          </h3>

          {/* Host Role Tag */}
          <div className="text-sm md:text-base font-bold text-[#c8102e] tracking-wide mb-4">
            Official Host & MC – Brit FinTech Awards 2026
          </div>

          {/* Bio Description Text */}
          <p className="text-base md:text-lg text-zinc-300 font-normal leading-relaxed">
            Award-winning magician, and corporate entertainer, Stephen Simmons will host the Brit FinTech Awards 2026, bringing charisma, humour and unforgettable audience engagement to the evening.
          </p>
        </motion.div>

        {/* Right Side Host Image Frame & Circular Overlay CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto lg:mr-0 mt-6 lg:mt-0 px-2 sm:px-0"
        >
          <div className="relative w-full">
            <img
              src="/assets/img/stephen-simmons-host-new.png"
              alt="Stephen Simmons - Official Host Brit FinTech Awards 2026"
              loading="lazy"
              className="w-full h-auto max-h-[460px] sm:max-h-[520px] md:max-h-[560px] object-cover object-top rounded-2xl grayscale-[15%] contrast-110 brightness-95 transition-all duration-500 hover:grayscale-0 hover:brightness-100"
            />

            {/* Prominent Circular CTA Button - Static Outer Wrapper + Inner Hover Animation */}
            <div className="absolute right-2 sm:right-4 -bottom-4 md:right-[-16px] lg:right-[-20px] md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-20">
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link 
                  to="/event-host-2026" 
                  title="View Official Profile of Stephen Simmons"
                  className="w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#c8102e] to-[#800010] text-white flex flex-col items-center justify-center border-2 border-white/20 shadow-[0_10px_25px_rgba(200,16,46,0.6),0_0_0_3px_rgba(200,16,46,0.25)] hover:from-[#e61435] hover:to-[#c8102e] transition-colors duration-300 cursor-pointer block"
                >
                  <span className="font-extrabold text-[9px] sm:text-[10px] md:text-[11px] tracking-wider text-center leading-tight uppercase">
                    VIEW
                    <br />
                    PROFILE
                  </span>
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Editorial Background Marquee Container (Overlapping Lower Half of Image) */}
      <div className="relative -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 pointer-events-none select-none overflow-hidden">
        
        {/* Row 1: BEHIND IMAGE (z-[2]) - Directly Above Row 2 with Clean Gap */}
        <div className="relative z-[2] mb-3 sm:mb-4 md:mb-6">
          <motion.div style={{ x: xRow1 }}>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear"
              }}
              className="flex w-max"
            >
              <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap font-black uppercase text-4xl sm:text-6xl md:text-8xl lg:text-[105px] leading-none tracking-tight">
                <span className="text-white opacity-90 drop-shadow-lg">OFFICIAL HOST.</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)" }}>ENTERTAINER.</span>
                <span className="text-white opacity-90 drop-shadow-lg">MAGICIAN.</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)" }}>SPELLBINDING.</span>
                <span className="text-white opacity-90 drop-shadow-lg">OFFICIAL HOST.</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)" }}>ENTERTAINER.</span>
                <span className="text-white opacity-90 drop-shadow-lg">MAGICIAN.</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)" }}>SPELLBINDING.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Row 2: FRONT LAYER OVER IMAGE (z-[30]) - Directly Below Row 1 */}
        <div className="relative z-[30]">
          <motion.div style={{ x: xRow2 }}>
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear"
              }}
              className="flex w-max"
            >
              <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap font-black uppercase text-4xl sm:text-6xl md:text-8xl lg:text-[105px] leading-none tracking-tight">
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)" }}>FEARLESS & CHARMING.</span>
                <span className="text-white opacity-95 drop-shadow-2xl">UNFORGETTABLE.</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)" }}>MAGIC CIRCLE.</span>
                <span className="text-[#c8102e] opacity-95 drop-shadow-2xl">OFFICIAL HOST.</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)" }}>FEARLESS & CHARMING.</span>
                <span className="text-white opacity-95 drop-shadow-2xl">UNFORGETTABLE.</span>
                <span className="text-[#c8102e] opacity-95 drop-shadow-2xl">OFFICIAL HOST.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default EventHostSection;
