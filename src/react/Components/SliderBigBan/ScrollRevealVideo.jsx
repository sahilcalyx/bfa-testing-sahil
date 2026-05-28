import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const ScrollRevealVideo = ({
  videoSrc = "/assets/video/bfa-banner-video.mp4",
  taglineText = "The latest highlights of the Brit Fintech Awards",
  watermarkText = "BRIT FINTECH AWARDS • EXCELLENCE • INNOVATION • "
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Lock body scroll when lightbox is open
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

  // Helper to determine if the source is a YouTube video
  const isYouTube = videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be");

  return (
    <>
      {/* Redesigned Video Section with White Background & Side SVGs (No scroll effects) */}
      <section className="relative w-full bg-white py-24 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center font-outfit select-none z-10">
        
        {/* Animated Marquee Watermark Background */}
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center pointer-events-none opacity-[0.02] select-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 32, repeat: Infinity }}
            className="flex whitespace-nowrap text-[9vw] font-black uppercase text-zinc-950 font-outfit"
          >
            <span>{watermarkText}&nbsp;</span>
            <span>{watermarkText}&nbsp;</span>
          </motion.div>
        </div>

        {/* Animated Floating SVGs on both sides (visible on larger screens) */}
        <div className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none z-10 hidden md:block">
          
          {/* Left Side SVG */}
          <motion.img
            src="/assets/svgs/download.svg"
            className="absolute top-1/2 left-0 lg:left-6 -translate-y-1/2 h-[75%] object-cover w-[22%] opacity-[0.8] -scale-x-100 filter drop-shadow-[0_0_12px_rgba(200,16,46,0.38)] brightness-120"
            animate={{
              y: ["-50%", "-46%", "-50%"],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            alt=""
          />

          {/* Right Side SVG */}
          <motion.img
            src="/assets/svgs/download.svg"
            className="absolute top-1/2 right-0 lg:right-6 -translate-y-1/2 h-[75%] object-cover w-[22%] opacity-[0.8] -scale-y-100 filter drop-shadow-[0_0_12px_rgba(200,16,46,0.38)] brightness-120"
            animate={{
              y: ["-50%", "-54%", "-50%"],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 9.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            alt=""
          />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center mb-12 flex flex-col items-center relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 font-outfit leading-none"
          >
            Watch <span className="text-[#c8102e]">Highlights</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="w-16 h-1 bg-[#c8102e] rounded-full mt-4 origin-center" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-zinc-400 mt-4 font-outfit"
          >
            {taglineText}
          </motion.p>
        </div>

        {/* Centered Video Card Display (Static size, hover animations) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-zinc-200/50 bg-zinc-950 z-20 group/video cursor-pointer hover:shadow-[0_30px_70px_rgba(200,16,46,0.12)] hover:-translate-y-1 transition-all duration-500"
          onClick={() => setIsLightboxOpen(true)}
        >
          {/* Silent looping preview media */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {isYouTube ? (
              <iframe
                className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
                src={`https://www.youtube.com/embed/${videoSrc.split("v=")[1] || videoSrc.split("/embed/")[1]}?autoplay=1&mute=1&loop=1&playlist=${videoSrc.split("v=")[1] || videoSrc.split("/embed/")[1]}&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="BFA Preview Video"
              />
            ) : (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
              />
            )}
          </div>

          {/* Dark Color overlay on hover */}
          <div className="absolute inset-0 bg-black/35 group-hover/video:bg-black/25 z-10 transition-colors duration-500 pointer-events-none" />

          {/* Centered Minimalist Play Button */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 group-hover/video:bg-[#c8102e] text-white rounded-full border border-white/30 group-hover/video:border-transparent backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover/video:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.4)] relative">
              
              {/* Pulsing Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-75 group-hover/video:hidden" />
              
              <Play size={24} className="text-white ml-1.5 fill-white" />
            </div>
          </div>
        </motion.div>
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

            {/* Video Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              {isYouTube ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoSrc.split("v=")[1] || videoSrc.split("/embed/")[1]}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="BFA YouTube Lightbox Player"
                />
              ) : (
                <video
                  src={videoSrc}
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollRevealVideo;
