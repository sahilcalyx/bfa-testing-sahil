import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, X } from "lucide-react";

const ScrollingVideoHero = ({ 
  youtubeId = "o6WjXbRSEFo", 
  title = "Awards Highlights",
  subtitle = "Scroll to expand video"
}) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Check if we are on mobile to customize initial dimensions
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Responsive transforms for width, height, border radius and scale
  const width = useTransform(
    scrollYProgress,
    [0, 0.8],
    [isMobile ? "92vw" : "80vw", "100vw"]
  );
  const height = useTransform(
    scrollYProgress,
    [0, 0.8],
    [isMobile ? "50vh" : "60vh", "100vh"]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["24px", "0px"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.8],
    [0.96, 1.0]
  );

  // Transform for fade-out elements (text overlay, pulsing scroll indicator)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const overlayY = useTransform(scrollYProgress, [0, 0.35], [0, -30]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  return (
    <>
      <section 
        ref={sectionRef} 
        className="relative w-full h-[150vh] bg-black select-none z-10"
      >
        {/* Decorative background underlay, visible when video is scaled down */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
          <div className="absolute -top-[10%] -left-[10%] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#ffd700]/12 to-transparent blur-[90px]" />
          <div className="absolute -bottom-[15%] -right-[10%] w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#c8102e]/15 to-transparent blur-[90px]" />
          
          <img
            src="/assets/svgs/download.svg"
            className="absolute top-0 left-0 h-[80%] object-cover w-[40%] opacity-[0.4] -scale-x-100 filter drop-shadow-[0_0_10px_rgba(200,16,46,0.3)] brightness-120"
            alt=""
          />
          <img
            src="/assets/svgs/download.svg"
            className="absolute bottom-0 right-0 h-[80%] object-cover w-[40%] opacity-[0.4] -scale-y-100 filter drop-shadow-[0_0_10px_rgba(200,16,46,0.3)] brightness-120"
            alt=""
          />
        </div>

        {/* Sticky wrapper to pin the content while scrolling down */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center z-10">
          
          {/* Animated video frame */}
          <motion.div
            style={{
              width,
              height,
              borderRadius,
              scale,
            }}
            className="relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10 aspect-video md:aspect-auto"
          >
            {/* Silent looping YouTube video */}
            <iframe
              className="absolute inset-0 w-full h-full object-cover scale-[1.08] pointer-events-none"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Awards Banquet Video Preview"
            />

            {/* Dark tint and gradient overlay over video */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 z-10" />

            {/* Click interceptor to open the Lightbox */}
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-center"
            >
              {/* Overlay content: Title & Subtitle that fade out on scroll */}
              <motion.div
                style={{
                  opacity: overlayOpacity,
                  y: overlayY,
                }}
                className="text-center px-6 flex flex-col items-center gap-4 z-20 pointer-events-none"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-white font-outfit drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {title}
                </h2>
                
                {/* Play Button Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 hover:bg-white/20 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)] my-2">
                  <Play size={28} className="text-white ml-1.5 fill-white" />
                </div>

                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c8102e] font-outfit">
                  {subtitle}
                </p>
              </motion.div>

              {/* Scrolling instruction dot at the bottom of the video */}
              <motion.div
                style={{ opacity: overlayOpacity }}
                className="absolute bottom-6 flex flex-col items-center gap-2 pointer-events-none z-20"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Scroll Down
                </span>
                <div className="w-4 h-6 border border-white/30 rounded-full p-0.5 flex justify-center">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-1 h-1 bg-[#c8102e] rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Video Player */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              className="absolute top-24 right-6 w-12 h-12 bg-black/60 hover:bg-[#c8102e] text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/25 transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.6)] cursor-pointer z-[100000]"
              aria-label="Close video player"
            >
              <X size={22} className="stroke-[2.5]" />
            </button>

            {/* Video Container with Animation */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Controllable Lightbox Video Player"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollingVideoHero;
