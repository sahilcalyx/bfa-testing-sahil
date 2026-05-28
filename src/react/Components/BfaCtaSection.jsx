import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Sparkles, Ticket, Calendar, MapPin, Award, Rocket } from "lucide-react";

const BfaCtaSection = () => {
  return (
    <>
      <style>{`
        .bfa-section-outer {
          position: relative;
          padding: 80px 20px;
          background: #000000;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }
        
        /* Subtle theme-color lighting in background */
        .bfa-section-glow-1 {
          position: absolute;
          top: -20%;
          left: 10%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(200, 16, 46, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .bfa-section-glow-2 {
          position: absolute;
          bottom: -20%;
          right: 10%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .bfa-cta-card-outer {
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(200,16,46,0.15) 50%, rgba(0,0,0,0.5));
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bfa-cta-card-outer:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(200, 16, 46, 0.18);
          background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(200,16,46,0.3) 50%, rgba(0,0,0,0.5));
        }

        .bfa-cta-card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 19px;
          background: rgba(12, 10, 11, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.02);
          padding: 35px 30px;
          position: relative;
          overflow: hidden;
        }

        .bfa-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .bfa-badge.crimson {
          background: rgba(200, 16, 46, 0.1);
          border: 1px solid rgba(200, 16, 46, 0.3);
          color: #ff3b57;
        }

        .bfa-badge.gold {
          background: rgba(255, 215, 0, 0.08);
          border: 1px solid rgba(255, 215, 0, 0.25);
          color: #ffd700;
        }

        .bfa-accent-line {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          margin: 22px 0;
        }
      `}</style>

      <section className="bfa-section-outer">
        {/* Decorative elements */}
        <div className="bfa-section-glow-1" />
        <div className="bfa-section-glow-2" />

        <div className="container relative z-10 max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center gap-2 mb-4 px-3.5 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm select-none"
            >
              <Award className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                Brit Fintech Awards 2026
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight"
            >
              Shine on the <span className="text-[#c8102e]">Grandest Stage</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-zinc-400 font-medium max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              Celebrate outstanding fintech innovation and secure your place alongside industry visionaries, disruptors, and global leaders.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* LEFT CARD: AWARD NOMINATIONS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bfa-cta-card-outer"
            >
              <div className="bfa-cta-card-inner">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="bfa-badge crimson">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Nominations Open
                  </div>
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b57] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff3b57]"></span>
                  </div>
                </div>

                {/* Pricing & Timing info */}
                <div className="flex flex-col mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white">£195</span>
                    <span className="text-sm text-zinc-500 font-bold line-through">£395</span>
                    <span className="text-xs text-[#ff3b57] font-extrabold uppercase tracking-wider ml-1 bg-[#ff3b57]/10 px-2 py-0.5 rounded">
                      Save 50%
                    </span>
                  </div>
                  <span className="text-xs text-white/50 font-bold uppercase tracking-[0.15em] mt-2 select-none">
                    Super Early Bird Ends 15th June 2026
                  </span>
                </div>

                <div className="bfa-accent-line" />

                {/* Details list */}
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="text-lg font-black text-white uppercase tracking-wider leading-none">
                    Submit Your Nomination
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed m-0">
                    Stand out among elite fintech platforms. Position your business to attract premium investor eyes, benchmark your achievements, and validate your team's excellence with global prestige.
                  </p>
                </div>

                {/* Action button */}
                <NavLink
                  to="/nominate-now"
                  className="relative overflow-hidden w-full py-4 px-6 mt-8 rounded-xl bg-gradient-to-r from-[#e8243e] via-[#c8102e] to-[#8a0b1f] hover:from-[#ff3b57] hover:via-[#e8243e] hover:to-[#c8102e] text-white font-black uppercase tracking-[0.18em] text-xs sm:text-sm text-center shadow-[0_6px_25px_rgba(200,16,46,0.35)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer group/card-cta-1 flex items-center justify-center gap-2.5 border border-white/10"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card-cta-1:translate-x-full transition-transform duration-[1200ms] ease-out" />
                  <Rocket className="w-4 h-4 text-[#ffd700] group-hover/card-cta-1:translate-y-[-2px] transition-transform duration-300" />
                  <span>Nominate Now</span>
                </NavLink>
              </div>
            </motion.div>

            {/* RIGHT CARD: CEREMONY TICKETS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bfa-cta-card-outer"
            >
              <div className="bfa-cta-card-inner">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="bfa-badge gold">
                    <Ticket className="w-3.5 h-3.5" />
                    Ceremony Tickets
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffd700]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffd700]" />
                  </div>
                </div>

                {/* Gala timing info */}
                <div className="flex flex-col mt-6">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="w-5 h-5 text-[#ffd700] shrink-0" />
                    <span className="text-xl sm:text-2xl font-black uppercase tracking-wide">9th October 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 mt-1 select-none">
                    <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-[0.12em]">
                      Landing Forty-Two, London
                    </span>
                  </div>
                </div>

                <div className="bfa-accent-line" />

                {/* Details list */}
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="text-lg font-black text-[#ffd700] uppercase tracking-wider leading-none">
                    Secure Your Seat Today
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed m-0">
                    Attend the showcase evening of the year in the heart of London. Exchange ideas with founders, network under breathtaking views, and celebrate the fintech sector's most anticipated achievements.
                  </p>
                </div>

                {/* Action button */}
                <NavLink
                  to="/ticket-booking"
                  className="w-full py-4 px-6 mt-8 rounded-xl bg-white/[0.04] hover:bg-[#c8102e]/10 border border-white/8 hover:border-[#c8102e]/40 text-white font-black uppercase tracking-[0.18em] text-xs sm:text-sm text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_25px_rgba(200,16,46,0.15)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer group/card-cta-2 flex items-center justify-center gap-2.5"
                >
                  <Ticket className="w-4 h-4 text-white group-hover/card-cta-2:scale-110 transition-transform duration-300" />
                  <span>Book Ticket Now</span>
                </NavLink>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BfaCtaSection;
