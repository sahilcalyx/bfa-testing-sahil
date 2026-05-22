import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, MapPin, Calendar, Sparkles, Rocket, Building2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const InteractiveHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileVideoOpen, setIsMobileVideoOpen] = useState(false);
  const videoRef = useRef(null);

  // Lock scroll when video is expanded or mobile video popup is open
  useEffect(() => {
    if (isExpanded || isMobileVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded, isMobileVideoOpen]);

  // Unified video click handler
  const handleVideoClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (window.innerWidth < 1024) {
      setIsMobileVideoOpen(true);
    } else {
      setIsExpanded(true);
    }
  };

  // Handle video playback when expansion state changes
  useEffect(() => {
    if (videoRef.current && typeof videoRef.current.play === "function") {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay was prevented on state transition:", err);
      });
    }
  }, [isExpanded]);



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

      <section className="relative w-full min-h-screen lg:h-[100svh] flex flex-col lg:flex-row overflow-hidden bg-black text-white font-outfit select-none">

        {/* ================= LEFT HALF: BRAND & REGISTRATION ================= */}
        <div className={`relative bg-black flex flex-col justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 ${isExpanded
          ? "w-0 lg:w-0 h-0 lg:h-full min-h-0 lg:min-h-0 p-0 opacity-0 pointer-events-none"
          : "w-full lg:w-1/2 min-h-[50vh] lg:min-h-0 pt-32 pb-12 px-6 md:p-12 lg:px-8 xl:px-16 lg:pb-16 lg:pt-36 opacity-100"
          }`}>

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
          <div className={`flex-1 flex flex-col justify-center items-center text-center my-12 lg:my-0 z-10 max-w-2xl mx-auto transition-all duration-500 ${isExpanded ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}>
            {/* Title */}
            <h1 className="text-[2.6rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[3rem] xl:text-[3.8rem] 2xl:text-[4.8rem] leading-[0.9] tracking-tight uppercase text-white font-outfit select-none">
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
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base font-light tracking-wide mt-6 mb-5 font-montserrat max-w-xl leading-relaxed text-center"
            >
              This year, <span className="font-semibold text-white">Brit FinTech Awards 2026</span> rises above London’s financial core for a night built for the people shaping the future of fintech.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-[#c8102e] font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs lg:text-[10px] xl:text-xs mb-6 select-none font-outfit"
            >
              The next chapter starts here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-6 lg:gap-4 xl:gap-8 w-fit sm:w-full mx-auto mt-2 mb-6 px-4"
            >
              {/* Date Box */}
              <div className="flex flex-row items-start justify-start gap-3 w-fit shrink-0 text-left">
                <Calendar className="text-white/95 shrink-0 mt-0.5 w-5 h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
                <p className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold text-white font-outfit tracking-wide leading-none whitespace-nowrap">9th October 2026</p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-[1px] h-5 lg:h-4 xl:h-5 2xl:h-6 bg-white/15 shrink-0 mt-0.5" />

              {/* Venue Box */}
              <div className="flex flex-row items-start justify-start gap-3 w-fit shrink-0 text-left">
                <MapPin className="text-white/95 shrink-0 mt-0.5 w-5 h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold text-white font-outfit leading-none whitespace-nowrap">122 Leadenhall St, London</p>
                  <p className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg font-bold text-white font-outfit leading-none whitespace-nowrap -mt-1 md:-mt-1.5 lg:-mt-0.5 xl:-mt-1">Landing Forty-Two</p>
                </div>
              </div>
            </motion.div>

            {/* Outro Footer Teaser */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-xs sm:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm text-white/45 font-semibold tracking-[0.2em] mt-2 mb-6 text-center select-none font-montserrat"
            >
              London, we're just getting started Stay tuned <br />See you at Landing 42
            </motion.p>

            {/* Watch on YouTube Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2"
            >
              <a
                href="https://youtu.be/o6WjXbRSEFo?si=uPterkW0RdU1MlC4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pro-1 uppercase tracking-wider flex items-center justify-center gap-3 text-center"
              >
                {/* YouTube Icon */}
                <svg
                  className="w-5 h-5 fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="whitespace-nowrap">Watch on YouTube</span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* ================= RIGHT HALF: MEDIA BANQUET & ACTIONS ================= */}
        <div
          onClick={!isExpanded ? handleVideoClick : undefined}
          className={`relative overflow-hidden bg-zinc-950 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 ${isExpanded
            ? "w-full lg:w-full h-screen lg:h-full p-0 md:p-0 lg:p-0 cursor-default"
            : "w-full lg:w-1/2 h-[50vh] lg:h-full p-8 md:p-12 lg:p-16 cursor-pointer group/pane"
            }`}
        >

          {/* Silent Looping Banquet Video or Full Screen Video */}
          <iframe
            className={`absolute inset-0 w-full h-full transition-all duration-700 ${isExpanded
              ? "opacity-100 pointer-events-auto z-10 scale-100"
              : "opacity-85 pointer-events-none z-0 scale-[1.35]"
              }`}
            src={
              isExpanded
                ? "https://www.youtube.com/embed/o6WjXbRSEFo?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                : "https://www.youtube.com/embed/o6WjXbRSEFo?autoplay=1&mute=1&loop=1&playlist=o6WjXbRSEFo&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Vignette & color filter overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/50 z-0 pointer-events-none transition-opacity duration-700 ${isExpanded ? "opacity-0" : "opacity-100"
            }`} />

          {/* Central Play Button Interaction */}
          <div className={`flex-1 flex items-center justify-center z-10 transition-all duration-500 ${isExpanded ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
            }`}>
            <motion.button
              onClick={handleVideoClick}
              className="group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white/10 hover:bg-white/20 rounded-full border border-white/35 backdrop-blur-sm transition-all duration-300 shadow-[0_0_35px_rgba(0,0,0,0.4)] group-hover/pane:scale-105 group-hover/pane:bg-white/15"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 pointer-events-none" />

              {/* Play symbol */}
              <Play
                size={34}
                className="text-white ml-2.5 fill-white transition-transform group-hover:scale-105 duration-300"
              />
            </motion.button>
          </div>

          {/* Floating close button to collapse video */}
          {isExpanded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsExpanded(false);
              }}
              className="fixed top-24 lg:top-28 right-6 z-[9999] w-12 h-12 bg-black/60 hover:bg-[#c8102e] text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/25 transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.6)] cursor-pointer"
              aria-label="Collapse video"
            >
              <X size={22} className="stroke-[2.5]" />
            </button>
          )}

        </div>
      </section>

      {/* ================= MOBILE VIEW ONLY: VIDEO POPUP LIGHTBOX ================= */}
      <AnimatePresence>
        {isMobileVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setIsMobileVideoOpen(false)}
          >
            {/* Close Button below sticky header area */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileVideoOpen(false);
              }}
              className="absolute top-24 right-6 w-12 h-12 bg-black/60 hover:bg-[#c8102e] text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/25 transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.6)] cursor-pointer z-[100000]"
              aria-label="Close video popup"
            >
              <X size={22} className="stroke-[2.5]" />
            </button>

            {/* Video Player */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/o6WjXbRSEFo?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveHero;
