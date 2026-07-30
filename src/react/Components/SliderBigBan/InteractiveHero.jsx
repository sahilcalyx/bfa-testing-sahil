import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles, Rocket, Calendar, MapPin, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";

const InteractiveHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileVideoOpen, setIsMobileVideoOpen] = useState(false);
  const videoRef = useRef(null);

  // Offer types for the compact offer card
  const offers = [
    { id: "early", label: "Nominate Now", price: "£295", originalPrice: "£395", subtitle: "Limited time" },
    { id: "standard", label: "Standard Admission", price: "£250", originalPrice: "£495", subtitle: "Best value" },
    { id: "vip", label: "VIP Package", price: "£495", originalPrice: "£895", subtitle: "Includes perks" },
  ];
  const [selectedOffer, setSelectedOffer] = useState(offers[0].id);
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
        
        @keyframes header-btn-flash {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 120%;
            opacity: 0;
          }
        }
        
        .btn-header-style {
          height: 55px;
          padding: 0 25px;
          font-size: 18px;
          font-weight: bold;
          color: white !important;
          text-decoration: none;
          border: 2px solid #ff3b57;
          border-radius: 12px;
          background: transparent;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          z-index: 1;
          transition: transform 0.2s ease-in-out, background-color 0.3s, color 0.3s;
          box-shadow: 0 0 5px rgba(255, 59, 87, 0.7),
                      0 0 5px rgba(255, 59, 87, 0.4),
                      0 0 5px rgba(255, 59, 87, 0.2);
          max-width: 220px;
          width: 100%;
          margin: 0 auto;
        }

        .btn-header-style::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 60%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: skewX(-20deg);
          animation: header-btn-flash 2.5s ease-in-out infinite;
          z-index: 0;
        }

        .btn-header-style:hover {
          transform: scale(1.05);
          background: rgba(255, 59, 87, 0.05);
          box-shadow: 0 0 8px rgba(255, 59, 87, 0.8),
                      0 0 12px rgba(255, 59, 87, 0.5);
        }

        .btn-header-style:active {
          transform: scale(0.95);
        }
      `}</style>

      <section className="relative w-full min-h-screen lg:h-[100svh] flex flex-col lg:flex-row lg:overflow-hidden bg-black text-white font-outfit select-none">

        {/* ================= LEFT HALF: BRAND & REGISTRATION ================= */}
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
            className={`flex-1 flex flex-col justify-center items-center text-center my-12 lg:my-0 z-10 max-w-2xl mx-auto transition-all duration-500 ${isExpanded
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100"
              }`}
          >


            <h1 className="leading-[0.95] tracking-tight uppercase text-white font-outfit select-none">


              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="block text-[2.2rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[2.1rem] xl:text-[2.8rem] 2xl:text-[3.5rem] font-black"
              >
                Award Nominations
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="block text-[2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[1.9rem] xl:text-[2.5rem] 2xl:text-[3.2rem] font-light"
              >
                Open For
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="block text-[2.8rem] sm:text-[4.4rem] md:text-[5.5rem] lg:text-[2.8rem] xl:text-[3.6rem] 2xl:text-[4.5rem] font-black text-[#c8102e]"
              >
                2026
              </motion.span>
            </h1>
            {/* Nomination Open Announcement */}
            {/* Simple, Clean and Highly Understandable Super Early Bird Block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-1 mt-4 mb-1 select-none font-outfit text-center"
            >
              <span className="text-base sm:text-2xl font-black uppercase tracking-[0.25em] ">
                 Early Bird Offer Extended
              </span>
              <p className="text-[12px] sm:text-[14px] font-bold text-[#ff4d6a] tracking-[0.2em] uppercase mt-1.5 leading-none">
                1st July 2026 – 31st July 2026
              </p>
            </motion.div>
            {/* Urgency tagline */}


            {/* OFFERS: animated switcher shown in same compact space */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 lg:mt-2 xl:mt-2 2xl:mt-2 w-full"
            >
              <div className="max-w-sm mx-auto w-full flex flex-col gap-4">
                {/* Small selector buttons */}


                <NavLink
                  to="/nominate-now#nominate-now"
                  className="group flex items-stretch gap-0 rounded-lg lg:rounded-md xl:rounded-lg overflow-hidden border border-white/10 hover:border-[#c8102e]/40 bg-white/[0.04] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(200,16,46,0.25)] transition-all duration-500 cursor-pointer w-full text-left"
                >
                  {/* Red accent bar */}
                  <div className="w-1.5 bg-gradient-to-b from-[#e8243e] via-[#c8102e] to-[#8a0b1f] shrink-0" />

                  {/* Price section */}
                  <div className="flex items-center justify-center px-2.5 sm:px-4 py-1.5 bg-[#c8102e]/10 group-hover:bg-[#c8102e]/20 border-r border-white/[0.06] transition-colors duration-500 min-w-[85px] sm:min-w-[120px] lg:min-w-[100px] xl:min-w-[120px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedOffer + "-price-container"}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-center"
                      >
                        {offers.find((x) => x.id === selectedOffer).originalPrice && (
                          <span className="text-[11px] sm:text-xs lg:text-[10px] xl:text-xs font-semibold text-white/50 line-through tracking-wider mb-0.5 select-none">
                            {offers.find((x) => x.id === selectedOffer).originalPrice}
                          </span>
                        )}
                        <span className="text-[1.8rem] sm:text-[2.2rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.2rem] font-black text-white leading-none tracking-tight">
                          {offers.find((x) => x.id === selectedOffer).price}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Details section */}
                  <div className="flex flex-col justify-center items-center px-3 sm:px-5 py-1.5 flex-1 bg-gradient-to-r from-[#c8102e] via-[#b80e28] to-[#980b20] group-hover:from-[#e8243e] group-hover:via-[#c8102e] group-hover:to-[#a00d24] transition-all duration-500">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedOffer + "-details-container"}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-center w-full"
                      >
                        <span className="text-white text-[12px] sm:text-[18px] lg:text-[16px] xl:text-[18px] font-black uppercase tracking-[0.12em] sm:tracking-[0.25em] leading-none group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-center w-full block whitespace-nowrap">
                          {offers.find((x) => x.id === selectedOffer).label}
                        </span>
                        {offers.find((x) => x.id === selectedOffer).dateRange && (
                          <span className="text-white/80 text-[8.5px] sm:text-[9.5px] lg:text-[8px] xl:text-[9.5px] uppercase tracking-[0.15em] font-extrabold mt-1.5 text-center w-full block select-none">
                            {offers.find((x) => x.id === selectedOffer).dateRange}
                          </span>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </NavLink>

                <NavLink
                  to="/ticket-booking"
                  className="btn-header-style"
                >
                  Book Tickets Now
                </NavLink>
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
                ? "https://www.youtube.com/embed/SYUSmWIlZ9o?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                : "https://www.youtube.com/embed/SYUSmWIlZ9o?autoplay=1&mute=1&loop=1&playlist=SYUSmWIlZ9o&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
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

        {/* Floating Premium Venue Address Card — Brushed Metal + Red Theme */}
        {!isExpanded && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-30 pointer-events-auto w-[calc(100%-2rem)] sm:w-[290px]">
            <style>{`
              @keyframes pulse-card-border {
                0%, 100% {
                  border-color: rgba(200, 16, 46, 0.4);
                  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.7), 0 0 15px rgba(200, 16, 46, 0.15);
                }
                50% {
                  border-color: rgba(255, 215, 0, 0.5);
                  box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 215, 0, 0.25);
                }
              }

              @keyframes bounce-icon {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px); }
              }

              @keyframes float-icon {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-1.5px); }
              }

              @keyframes ticket-shake {
                0%, 100% { transform: rotate(0deg) scale(1); }
                25% { transform: rotate(-5deg) scale(1.03); }
                75% { transform: rotate(5deg) scale(1.03); }
              }

              @keyframes shimmer-sweep {
                0% { transform: translateX(-100%) skewX(-15deg); }
                100% { transform: translateX(100%) skewX(-15deg); }
              }

              .venue-card-outer {
                border-radius: 20px;
                padding: 1px;
                background: linear-gradient(135deg, rgba(200, 16, 46, 0.55) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.08) 60%, rgba(255, 215, 0, 0.35) 100%);
                animation: pulse-card-border 8s infinite ease-in-out;
                transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
              }
              
              .venue-card-outer:hover {
                transform: translateY(-4px) scale(1.02);
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(200, 16, 46, 0.25);
              }

              .venue-card-inner {
                display: flex;
                flex-direction: column;
                border-radius: 19px;
                overflow: hidden;
                background: rgba(10, 10, 12, 0.88);
                backdrop-filter: blur(30px) saturate(200%);
                -webkit-backdrop-filter: blur(30px) saturate(200%);
                border: 1px solid rgba(255, 255, 255, 0.03);
              }

              .card-section-interactive {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 16px 20px;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                cursor: default;
                position: relative;
                width: 100%;
              }

              .card-section-interactive:hover {
                background: rgba(255, 255, 255, 0.02);
              }

              .card-section-interactive::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 3px;
                height: 100%;
                background: transparent;
                transition: all 0.3s ease;
              }

              .card-section-interactive.section-date:hover::before {
                background: #ff3b57;
                box-shadow: 0 0 10px #ff3b57;
              }

              .card-section-interactive.section-venue:hover::before {
                background: #ffd700;
                box-shadow: 0 0 10px #ffd700;
              }

              .card-section-interactive:hover .icon-date {
                animation: bounce-icon 0.8s infinite ease-in-out;
              }

              .card-section-interactive:hover .icon-venue {
                animation: float-icon 1s infinite ease-in-out;
              }

              .vc-divider {
                width: 85%;
                margin: 0 auto;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent);
              }

              .venue-card-btn-pill {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding: 11px 20px;
                background: linear-gradient(135deg, #c8102e 0%, #e8243e 50%, #9e0c22 100%);
                cursor: pointer;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                width: 100%;
                position: relative;
                overflow: hidden;
                text-decoration: none !important;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 25px;
                box-shadow: 0 4px 15px rgba(200, 16, 46, 0.3);
              }

              .venue-card-btn-pill::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
                transform: translateX(-100%);
                animation: shimmer-sweep 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
              }

              .venue-card-btn-pill:hover::after {
                animation: shimmer-sweep 1.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
              }

              .venue-card-btn-pill:hover {
                background: linear-gradient(135deg, #e8243e 0%, #ff3b57 50%, #b30e28 100%);
                box-shadow: 0 6px 20px rgba(200, 16, 46, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.2);
                transform: translateY(-1px);
              }

              .venue-card-btn-pill:active {
                transform: translateY(1px);
                box-shadow: 0 2px 10px rgba(200, 16, 46, 0.4);
              }

              .venue-card-btn-pill:hover .icon-ticket {
                animation: ticket-shake 0.4s ease-in-out infinite;
              }

              .vc-label-container {
                display: flex;
                align-items: center;
                gap: 6px;
                margin-bottom: 2px;
              }

              .vc-label {
                font-family: 'Outfit', sans-serif;
                font-size: 9px;
                font-weight: 900;
                letter-spacing: 0.25em;
                text-transform: uppercase;
                color: #ff3b57;
                display: inline-block;
                line-height: 1;
              }

              .vc-value {
                font-family: 'Outfit', sans-serif;
                font-size: 13.5px;
                font-weight: 800;
                color: #ffffff;
                letter-spacing: 0.02em;
                display: block;
                line-height: 1.2;
                white-space: normal;
              }

              .vc-address {
                font-family: 'Outfit', sans-serif;
                font-size: 12px;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.55);
                letter-spacing: 0.01em;
                display: block;
                margin-top: 3px;
                line-height: 1.3;
                white-space: normal;
              }

              @media (min-width: 640px) {
                .vc-value {
                  white-space: nowrap;
                }
                .vc-address {
                  white-space: nowrap;
                }
              }
            `}</style>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="venue-card-outer"
            >
              <div className="venue-card-inner">
                {/* Date Area */}
                <div className="card-section-interactive section-date">
                  <div className="p-2 rounded-xl bg-[#ff3b57]/8 border border-[#ff3b57]/20 flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(255,59,87,0.05)] transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-[#ff3b57] icon-date transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <div className="vc-label-container">
                      <span className="vc-label">Date</span>
                    </div>
                    <span className="vc-value">Friday - 9th Oct 2026 </span>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="vc-divider" />

                {/* Venue Area */}
                <div className="card-section-interactive section-venue">
                  <div className="p-2 rounded-xl bg-[#ffd700]/8 border border-[#ffd700]/20 flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(255,215,0,0.05)] transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-[#ffd700] icon-venue transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <div className="vc-label-container">
                      <span className="vc-label" style={{ color: '#ffd700' }}>Venue</span>
                    </div>
                    <span className="vc-value">Landing Forty-Two</span>
                    <span className="vc-address">122 Leadenhall St, London EC3V 4AB</span>
                  </div>
                </div>


              </div>
            </motion.div>
          </div>
        )}
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
                src="https://www.youtube.com/embed/JEpncdxVGMg?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1"
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
