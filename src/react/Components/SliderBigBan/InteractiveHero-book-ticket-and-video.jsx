import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Calendar, MapPin, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";

const VENUE_MAPS_URL = "https://maps.app.goo.gl/HTmvq2hv7HkHbqNX9";

const InteractiveHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileVideoOpen, setIsMobileVideoOpen] = useState(false);
  const [ctaIndex, setCtaIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const delay = ctaIndex === 0 ? 3400 : 2200;
    const id = setTimeout(() => setCtaIndex((i) => (i + 1) % 2), delay);
    return () => clearTimeout(id);
  }, [ctaIndex]);
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
        .hero-panel-slide {
          transition: all 700ms cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        
        @keyframes cta-border-spin {
          to { transform: rotate(360deg); }
        }

        @keyframes cta-sheen {
          0% { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(240%) skewX(-18deg); }
        }

        @keyframes cta-live {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        .hero-cta {
          position: relative;
          display: inline-flex;
          isolation: isolate;
          max-width: 280px;
          width: 100%;
          margin: 0 auto;
          padding: 2px;
          border-radius: 14px;
          text-decoration: none;
          color: #fff !important;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(-2px);
          box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.18),
                      0 8px 22px rgba(200, 16, 46, 0.35);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }

        .hero-cta::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: -80%;
          background: conic-gradient(
            from 0deg,
            #7a0a18 0deg,
            #ffd700 70deg,
            #ffffff 110deg,
            #ffd700 150deg,
            #c8102e 220deg,
            #7a0a18 280deg,
            #ffd700 330deg,
            #7a0a18 360deg
          );
          animation: cta-border-spin 4.2s linear infinite;
        }

        .hero-cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 56px;
          border-radius: 12px;
          background:
            linear-gradient(90deg, transparent 32%, rgba(0, 0, 0, 0.42) 72%, rgba(0, 0, 0, 0.92) 100%),
            linear-gradient(180deg, #d41430 0%, #c8102e 55%, #9e0c22 100%);
          overflow: hidden;
          transition: background 0.35s ease;
        }

        .hero-cta-inner::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 42%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255, 255, 255, 0.16) 45%,
            transparent 100%
          );
          animation: cta-sheen 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-cta:hover {
          transform: translateY(0);
          box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.28),
                      0 10px 26px rgba(0, 0, 0, 0.35);
        }

        .hero-cta:hover .hero-cta-inner {
          background: #0b0b0c;
        }

        .hero-cta:active {
          transform: translateY(1px);
        }

        .hero-cta-label {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }

        .hero-cta-live {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #ff4d6a;
          animation: cta-live 1.6s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(255, 77, 106, 0.7);
          flex-shrink: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-cta::before,
          .hero-cta-inner::after,
          .hero-cta-live {
            animation: none;
          }
        }

        .hero-meta {
          width: 100%;
          background: #ffffff;
          border-radius: 14px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: left;
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.28);
        }

        .hero-meta-col {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          flex: 0 1 auto;
          min-width: 0;
          text-decoration: none;
          color: inherit;
        }

        .hero-meta-col.hero-meta-venue {
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .hero-meta-col.hero-meta-venue:hover {
          background: rgba(200, 16, 46, 0.04);
        }

        .hero-meta-icon {
          color: #c8102e;
          flex-shrink: 0;
        }

        .hero-meta-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
        }

        .hero-meta-weekday {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.25;
        }

        .hero-meta-date {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          font-weight: 800;
          color: #111111;
          line-height: 1.3;
        }

        .hero-meta-date sup {
          font-size: 0.62em;
          font-weight: 800;
          vertical-align: super;
          line-height: 0;
        }

        .hero-meta-line {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #111111;
          line-height: 1.35;
        }

        .hero-meta-divider {
          width: 1px;
          align-self: stretch;
          background: #e4e4e4;
          margin: 0 28px;
          flex-shrink: 0;
        }

        @media (max-width: 520px) {
          .hero-meta {
            flex-direction: column;
            padding: 16px 18px;
            gap: 14px;
          }

          .hero-meta-col {
            justify-content: center;
            width: 100%;
          }

          .hero-meta-divider {
            width: 60%;
            height: 1px;
            margin: 0 auto;
          }
        }
      `}</style>

      <section className="relative w-full min-h-screen lg:h-[100svh] flex flex-col lg:flex-row lg:overflow-hidden bg-black text-white font-outfit select-none">

        {/* ================= LEFT HALF: TICKET BOOKING ================= */}
        <div className={`relative bg-black flex flex-col justify-center overflow-hidden hero-panel-slide z-10 ${isExpanded
          ? "w-0 lg:w-0 h-0 lg:h-full min-h-0 lg:min-h-0 p-0 opacity-0 pointer-events-none"
          : "w-full lg:w-1/2 min-h-[50vh] lg:min-h-0 pt-32 pb-12 px-6 md:p-12 lg:px-8 xl:px-16 lg:pb-16 lg:pt-36 opacity-100"
          }`}>

          {/* Animated decorative blobs in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Top-Left Gold Blob */}
            <motion.div
              animate={{
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-[15%] -left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#ffd700]/18 to-transparent blur-[90px] will-change-transform"
            />

            {/* Top-Right Red Blob */}
            <motion.div
              animate={{
                opacity: [0.25, 0.40, 0.25],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-[10%] -right-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-bl from-[#c8102e]/35 to-transparent blur-[100px] will-change-transform"
            />

            {/* Bottom-Left Red Blob */}
            <motion.div
              animate={{
                opacity: [0.25, 0.40, 0.25],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-[10%] -left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#c8102e]/35 to-transparent blur-[100px] will-change-transform"
            />

            {/* Bottom-Right Dark Red Blob */}
            <motion.div
              animate={{
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-[15%] -right-[10%] w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#c8102e]/20 to-transparent blur-[90px] will-change-transform"
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
          <div
            className={`flex-1 flex flex-col justify-center items-center text-center my-6 lg:my-0 z-10 max-w-2xl mx-auto transition-all duration-500 ${isExpanded
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100"
              }`}
          >


            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/70 mb-3 select-none"
            >
              Final days to join the community
            </motion.p>

            <h1 className="leading-[0.95] tracking-tight uppercase text-white font-outfit select-none">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="block text-[2.2rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[2.1rem] xl:text-[2.8rem] 2xl:text-[3.5rem] font-black"
              >
                Secure Your
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="block text-[2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[1.9rem] xl:text-[2.5rem] 2xl:text-[3.2rem] font-light"
              >
                Seat At
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="block text-[2.8rem] sm:text-[4.4rem] md:text-[5.5rem] lg:text-[2.8rem] xl:text-[3.6rem] 2xl:text-[4.5rem] font-black text-[#c8102e]"
              >
                BFA26
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center gap-1 mt-4 mb-1 select-none font-outfit text-center"
            >
              <span className="text-base sm:text-2xl font-black uppercase tracking-[0.25em]">
                Awards Night Tickets
              </span>
              {/* <p className="text-[12px] sm:text-[14px] font-bold text-[#ff4d6a] tracking-[0.2em] uppercase mt-1.5 leading-none">
                11th September - Onwords
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-3 w-full"
            >
              <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-5">
                <NavLink
                  to="/ticket-booking"
                  className="hero-cta"
                >
                  <span className="hero-cta-inner">
                    <AnimatePresence mode="wait">
                      {ctaIndex === 0 ? (
                        <motion.span
                          key="book"
                          className="hero-cta-label"
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -16, opacity: 0 }}
                          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Ticket className="w-4 h-4" strokeWidth={2.4} />
                          Book Tickets Now
                        </motion.span>
                      ) : (
                        <motion.span
                          key="fast"
                          className="hero-cta-label"
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -16, opacity: 0 }}
                          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <span className="hero-cta-live" aria-hidden="true" />
                          Limited seats left
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </NavLink>

                <div className="hero-meta mt-1">
                  <div className="hero-meta-col">
                    <Calendar className="hero-meta-icon w-6 h-6" strokeWidth={1.75} />
                    <div className="hero-meta-copy">
                      <span className="hero-meta-weekday">Friday</span>
                      <span className="hero-meta-date">
                        9<sup>th</sup> October 2026
                      </span>
                    </div>
                  </div>

                  <div className="hero-meta-divider" aria-hidden="true" />

                  <a
                    href={VENUE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-meta-col hero-meta-venue"
                    aria-label="Open venue location in Google Maps"
                  >
                    <MapPin className="hero-meta-icon w-6 h-6" strokeWidth={1.75} />
                    <div className="hero-meta-copy">
                      <span className="hero-meta-line">Landing FortyTwo,</span>
                      <span className="hero-meta-line">122 Leadenhall Street,</span>
                      <span className="hero-meta-line">London EC3V 4AB</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ================= RIGHT HALF: MEDIA BANQUET & ACTIONS ================= */}
        <div
          onClick={!isExpanded ? handleVideoClick : undefined}
          className={`relative overflow-hidden bg-zinc-950 flex flex-col justify-center hero-panel-slide z-20 ${isExpanded
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
