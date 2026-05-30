import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Rocket } from "lucide-react";
import { NavLink } from "react-router-dom";

const StaticHero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;600;700;800;900&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white font-outfit select-none">

        {/* Animated decorative blobs in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Top-Left Gold Blob */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-[15%] -left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#ffd700]/18 to-transparent blur-[90px]"
          />

          {/* Top-Right Red Blob */}
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1.05, 0.95, 1.05],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-[10%] -right-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-bl from-[#c8102e]/35 to-transparent blur-[100px]"
          />

          {/* Bottom-Left Red Blob */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[10%] -left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#c8102e]/35 to-transparent blur-[100px]"
          />

          {/* Bottom-Right Dark Red Blob */}
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1.05, 0.95, 1.05],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[15%] -right-[10%] w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#c8102e]/20 to-transparent blur-[90px]"
          />

          {/* Top Left SVG on Dark BG */}
          <img
            src="/assets/svgs/download.svg"
            className="absolute top-0 left-0 h-[80%] object-cover w-[40%] opacity-[0.95] -scale-x-100 select-none pointer-events-none z-0 filter drop-shadow-[0_0_10px_rgba(200,16,46,0.6)] brightness-135"
            alt=""
          />

          {/* Bottom Right SVG on Dark BG */}
          <img
            src="/assets/svgs/download.svg"
            className="absolute bottom-0 right-0 h-[80%] object-cover w-[40%] opacity-[0.95] -scale-y-100 select-none pointer-events-none z-0 filter drop-shadow-[0_0_10px_rgba(200,16,46,0.6)] brightness-135"
            alt=""
          />
        </div>

        {/* Central content container */}
        <div className="relative flex flex-col justify-center items-center text-center z-10 max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-[2.6rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] leading-[0.9] tracking-tight uppercase text-white font-outfit select-none">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="block font-light"
            >
              The Brit
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="block font-semibold"
            >
              Fintech
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="block font-light text-white"
            >
              Awards
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="block font-semibold"
            >
              2026
            </motion.span>
          </h1>

          {/* Tagline */}


          {/* Date & Venue details grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] items-center sm:items-start justify-center gap-4 sm:gap-6 lg:gap-8 w-fit sm:w-full mx-auto mt-2 mb-8 px-4"
          >
            {/* Date Box */}
            <div className="flex flex-row items-center gap-3 w-fit sm:ml-auto text-left sm:text-right">
              <Calendar className="text-white/95 shrink-0 w-5 h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              <p className="text-sm sm:text-sm lg:text-[13px] xl:text-[15px] 2xl:text-base font-bold text-white font-outfit tracking-wide leading-none whitespace-nowrap m-0">
                9th October 2026
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-white/15 shrink-0 mt-0.5" />

            {/* Venue Box */}
            <div className="flex flex-row items-start gap-3 w-fit text-left">
              <MapPin className="text-white/95 shrink-0 mt-0.5 w-5 h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              <div className="flex flex-col items-start justify-start">
                <p className="text-sm sm:text-sm lg:text-[13px] xl:text-[15px] 2xl:text-base font-bold text-white font-outfit leading-none whitespace-nowrap m-0">
                  Landing Forty-Two
                </p>
                <p className="text-xs sm:text-xs lg:text-[11px] xl:text-[13px] 2xl:text-sm font-bold text-white/70 font-outfit leading-normal m-0 mt-1 whitespace-nowrap">
                  122 Leadenhall Street,
                </p>
                <p className="text-xs sm:text-xs lg:text-[11px] xl:text-[13px] 2xl:text-sm font-bold text-white/70 font-outfit leading-normal m-0 mt-0.5 whitespace-nowrap">
                  London EC3V 4AB
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dual CTAs: Nominate for Award & Book Tickets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full max-w-lg mx-auto"
          >
            <NavLink
              to="/nominate-now#nominate-now"
              className="btn-pro-1 uppercase tracking-wider flex items-center justify-center gap-2.5 text-center w-full sm:w-auto text-xs py-3.5 px-6 sm:text-sm sm:py-4 sm:px-8 lg:text-sm lg:py-4 lg:px-8 xl:text-base xl:py-4.5 xl:px-10"
            >

              <span className="whitespace-nowrap font-bold tracking-widest">Nominate for Award</span>
            </NavLink>

            <NavLink
              to="/ticket-booking"
              className="btn-pro-2 uppercase tracking-wider flex items-center justify-center gap-2.5 text-center w-full sm:w-auto text-xs py-3.5 px-6 sm:text-sm sm:py-4 sm:px-8 lg:text-sm lg:py-4 lg:px-8 xl:text-base xl:py-4.5 xl:px-10 text-white"
              style={{ color: "#fff" }}
            >

              <span className="whitespace-nowrap font-bold tracking-widest">Book Tickets</span>
            </NavLink>
          </motion.div>
        </div>

        {/* Floating Premium Venue Address Card */}
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 hidden sm:block pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.85, type: "spring" }}
            className="flex flex-col gap-3.5 p-5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[280px] text-left"
          >
            {/* Header / Event Title Badge */}
            <div className="flex items-center gap-2 pb-2.5 border-b border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#c8102e] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/60">Venue & Date</span>
            </div>

            {/* Date Details */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white shrink-0">
                <Calendar className="w-4.5 h-4.5 text-[#ff2e63]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold leading-none">When</span>
                <span className="text-sm font-bold text-white mt-1">9th October 2026</span>
              </div>
            </div>

            {/* Venue Address Details */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white shrink-0">
                <MapPin className="w-4.5 h-4.5 text-[#ffd700]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold leading-none">Where</span>
                <span className="text-sm font-bold text-white mt-1">Landing Forty-Two</span>
                <span className="text-xs text-white/70 font-medium leading-relaxed mt-0.5">
                  122 Leadenhall Street,<br />London EC3V 4AB
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StaticHero;
