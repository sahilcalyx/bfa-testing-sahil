import React from "react";
import { motion } from "framer-motion";
import ScrollExpandMedia from "../../../components/scroll-expansion-hero";

const DynamicSliderVideo = () => {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/assets/video/bfa-banner-video.mp4"
      titlePart1="The Brit"
      titlePart2="Fintech Awards"
      subtitle={
        <>
          Celebrating the brightest minds and the most innovative solutions driving the future of global financial technology.
          <br />
          Scroll to witness the exclusive venue reveal of the historic One Great George Street, Westminster, London.
        </>
      }
      scrollToExpand="Scroll to reveal venue"
      bgNode={
        <div className="absolute inset-0 bg-white z-0 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.04)_0%,rgba(255,255,255,1)_80%)] w-full h-full">
          {/* Diagonally aligned, darker animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Top-Left Dark Red Diagonal Blob */}
            <motion.div
              animate={{
                x: [-35, 35],
                y: [-25, 25],
                scale: [0.95, 1.05]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute -top-[10%] -left-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#4a000c]/35 to-transparent blur-[100px]"
            />

            {/* Bottom-Right Dark Red Diagonal Blob */}
            <motion.div
              animate={{
                x: [35, -35],
                y: [25, -25],
                scale: [1.05, 0.95]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute -bottom-[10%] -right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#4a000c]/35 to-transparent blur-[100px]"
            />
          </div>

          {/* Top Left Easily Visible Red SVG */}
          <img 
            src="/assets/svgs/download.svg" 
            className="absolute top-0 left-0 h-[80%] object-cover w-[40%] opacity-[0.65] -scale-x-100 select-none pointer-events-none z-10" 
            alt="" 
          />
          
          {/* Bottom Right Easily Visible Red SVG */}
          <img 
            src="/assets/svgs/download.svg" 
            className="absolute bottom-0 right-0 h-[80%] object-cover w-[40%] opacity-[0.65] -scale-y-100 select-none pointer-events-none z-10" 
            alt="" 
          />
        </div>
      }
    />
  );
};

export default DynamicSliderVideo;
