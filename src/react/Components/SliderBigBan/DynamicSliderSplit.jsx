import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Play, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DynamicSliderSplit = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const navigate = useNavigate();
  
  // Calculate transform origin robustly
  // We use offsetLeft and offsetTop because they ignore CSS transforms like scale.
  // This ensures the origin is EXACTLY the center of the "I", even if the container is scaled by 300x.
  useEffect(() => {
    const updateOrigin = () => {
      if (containerRef.current && targetRef.current) {
        let el = targetRef.current;
        let x = 0;
        let y = 0;
        
        // Walk up the offset tree until we hit the container
        while (el && el !== containerRef.current) {
          x += el.offsetLeft;
          y += el.offsetTop;
          el = el.offsetParent;
        }
        
        // Add half width and height to get the exact center of the "I"
        x += targetRef.current.offsetWidth / 2;
        y += targetRef.current.offsetHeight / 2;
        
        const originX = (x / containerRef.current.offsetWidth) * 100;
        const originY = (y / containerRef.current.offsetHeight) * 100;
        
        setOrigin(`${originX}% ${originY}%`);
      }
    };
    
    // Give DOM a brief moment to render custom fonts before measuring
    const timer = setTimeout(updateOrigin, 100);
    window.addEventListener('resize', updateOrigin);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateOrigin);
    };
  }, []);

  // Lock body scroll when video modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isVideoOpen]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // GTA 6 Style Animation Sequence Timeline:
  
  // 1. Mask Zoom: Scales down from 300x (filling screen with white hole) to 1x
  const maskScale = useTransform(scrollYProgress, [0.0, 0.35], [300, 1]);
  
  // 2. Solid Text: Fades in to turn the transparent cutout into solid white text
  const solidTextOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  
  // 3. Move Up: Moves the logo to the top center of the screen
  const textY = useTransform(scrollYProgress, [0.45, 0.65], ["0vh", "-30vh"]);
  
  // 4. Coming Soon Reveal: Fades and scales in the "COMING 2026" text below it
  const comingSoonOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const comingSoonY = useTransform(scrollYProgress, [0.65, 0.85], ["10vh", "0vh"]);
  const comingSoonScale = useTransform(scrollYProgress, [0.65, 0.9], [0.9, 1]);

  // Hero Play button fades out immediately on scroll
  const playButtonOpacity = useTransform(scrollYProgress, [0.0, 0.1], [1, 0]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');
        .custom-font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* Main Track: 400vh gives plenty of scroll room for the 4-phase sequence */}
      <div ref={trackRef} className="relative w-full bg-black custom-font-montserrat h-[400vh]">
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
          
          {/* Layer 0: Background Video Thumbnail */}
          {/* Always visible, acts as the backdrop for the mask */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://img.youtube.com/vi/TaD0bC6cGrU/maxresdefault.jpg" 
              alt="Brit Fintech Awards Thumbnail" 
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          {/* Layer 1: Multiply Mask Layer */}
          {/* Uses multiply blend mode: Black background hides video, White text shows video.
              At scale 300, the white text covers the screen = video is fully visible! */}
          <motion.div
            ref={containerRef}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black pointer-events-none will-change-transform"
            style={{
              mixBlendMode: "multiply",
              scale: maskScale,
              transformOrigin: origin,
              y: textY
            }}
          >
            <div className="text-white text-center font-black leading-[0.85] tracking-tighter w-full whitespace-nowrap">
              <div className="text-[5vw] md:text-[3vw] font-light tracking-[0.2em] mb-2 md:mb-4 uppercase">The Brit</div>
              <div className="text-[15vw] md:text-[12vw]">F<span ref={targetRef} className="inline-block">I</span>NTECH</div>
              <div className="text-[15vw] md:text-[12vw]">AWARDS</div>
            </div>
          </motion.div>

          {/* Layer 2: Solid White Text Layer */}
          {/* Matches the mask exactly, but fades in to make text solid white (GTA 6 style) */}
          <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
            style={{
              opacity: solidTextOpacity,
              y: textY
            }}
          >
            <div className="text-white text-center font-black leading-[0.85] tracking-tighter w-full whitespace-nowrap drop-shadow-2xl">
              <div className="text-[5vw] md:text-[3vw] font-light tracking-[0.2em] mb-2 md:mb-4 uppercase text-gray-300">The Brit</div>
              <div className="text-[15vw] md:text-[12vw]">FINTECH</div>
              <div className="text-[15vw] md:text-[12vw]">AWARDS</div>
            </div>
          </motion.div>

          {/* Layer 3: Coming Soon 2026 Text (Matches GTA 6 "COMING NOVEMBER 19 2026") */}
          <motion.div
            className="absolute inset-x-0 top-[50vh] md:top-[55vh] z-30 flex flex-col items-center justify-center pointer-events-none"
            style={{
              opacity: comingSoonOpacity,
              y: comingSoonY,
              scale: comingSoonScale
            }}
          >
            <div className="text-center font-black tracking-tighter leading-[0.9] mt-8 flex flex-col items-center">
               <div className="text-[12vw] md:text-[7vw] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 drop-shadow-lg">COMING</div>
               <div className="text-[10vw] md:text-[5vw] text-white tracking-[0.05em] mt-3 mb-3">OCTOBER</div>
               <div className="text-[14vw] md:text-[8vw] text-[#c8102e] drop-shadow-2xl">2026</div>
               
               {/* Watch Full Trailer Button */}
               <button 
                 onClick={() => setIsVideoOpen(true)}
                 className="mt-10 flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white backdrop-blur-sm transition-all pointer-events-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]"
               >
                 <Play size={20} fill="white" />
                 <span className="font-bold tracking-wide uppercase text-sm">Watch Full Trailer</span>
               </button>
            </div>
          </motion.div>

          {/* Layer 4: Initial Play Button (Centered on Hero) */}
          <motion.div 
            className="absolute inset-0 z-40 flex items-center justify-center"
            style={{ opacity: playButtonOpacity }}
          >
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-24 h-24 md:w-28 md:h-28 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center pointer-events-auto transition-transform hover:scale-110 hover:bg-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              <Play size={40} className="text-white ml-2" fill="white" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* 80% Width Video Player Modal appearing from bottom */}
      <AnimatePresence>
        {isVideoOpen && (
           <motion.div 
             initial={{ y: "100%", opacity: 0 }}
             animate={{ y: "0%", opacity: 1 }}
             exit={{ y: "100%", opacity: 0 }}
             transition={{ type: "spring", damping: 25, stiffness: 200 }}
             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
           >
              <div className="relative w-[95vw] md:w-[80vw] aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(200,16,46,0.2)] border border-white/10">
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-2 right-2 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-[#c8102e] rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/20 transition-colors"
                >
                  <X size={24} />
                </button>
                <iframe
                  src="https://www.youtube.com/embed/TaD0bC6cGrU?autoplay=1&rel=0&showinfo=0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicSliderSplit;
