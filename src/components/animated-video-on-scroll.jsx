"use client";
import * as React from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils"

const SPRING_TRANSITION_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
}

const variants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
  },
}
const ContainerScrollContext = React.createContext(undefined)
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}

export const ContainerScroll = ({ children, className, ...props }) => {
  const [scrollRange, setScrollRange] = React.useState([0, 600])

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setScrollRange([0, window.innerHeight * 0.8])
    }
  }, [])

  const { scrollY } = useScroll()
  const scrollYProgress = useTransform(scrollY, scrollRange, [0, 1])

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        className={cn("relative min-h-svh w-full", className)}
        {...props}>
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
}
ContainerScroll.displayName = "ContainerScroll"
export const ContainerAnimated = React.forwardRef((
  {
    className,
    transition,
    style,
    inputRange = [0.2, 0.8],
    outputRange = [80, 0],
    scaleRange = [1, 1],
    opacityRange = [1, 1],
    ...props
  },
  ref
) => {
  const { scrollYProgress } = useContainerScrollContext()
  const y = useTransform(scrollYProgress, inputRange, outputRange)
  const scale = useTransform(scrollYProgress, inputRange, scaleRange)
  const opacity = useTransform(scrollYProgress, inputRange, opacityRange)
  return (
    <motion.div
      ref={ref}
      className={cn("", className)}
      variants={variants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      style={{ y, scale, opacity, ...style }}
      transition={{ ...SPRING_TRANSITION_CONFIG, ...transition }}
      {...props} />
  );
})
ContainerAnimated.displayName = "ContainerAnimated"

export const ContainerSticky = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("sticky left-0 top-0 min-h-svh w-full", className)}
      {...props} />
  );
})
ContainerSticky.displayName = "ContainerSticky"

export const HeroVideo = React.forwardRef((
  { 
    style, 
    className, 
    transition, 
    scaleRange = [1, 1],
    progressRange = [0, 0.5],
    ...props 
  }, 
  ref
) => {
  const { scrollYProgress } = useContainerScrollContext()
  const scale = useTransform(scrollYProgress, progressRange, scaleRange)

  return (
    <motion.video
      ref={ref}
      className={cn("relative z-10 w-full h-full object-cover", className)}
      autoPlay
      muted
      loop
      playsInline
      style={{ scale, ...style }}
      {...props} />
  );
})
HeroVideo.displayName = "HeroVideo"

export const HeroButton = React.forwardRef(({ className, transition, ...props }, ref) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      ref={ref}
      className={cn(
        "group relative flex w-fit items-center rounded-full border border-[#84cc16] bg-gray-950/10 px-4 py-2 shadow-[0px_4px_24px_#84cc16] transition-colors hover:bg-slate-950/50",
        className
      )}
      {...props} />
  );
})
HeroButton.displayName = "HeroButton"

export const ContainerInset = React.forwardRef((
  {
    className,
    style,
    insetYRange = [45, 0],
    insetXRange = [45, 0],
    roundednessRange = [100, 0],
    progressRange = [0, 0.5],
    roundednessProgressRange = [0, 0.6],
    transition,
    ...props
  },
  ref
) => {
  const { scrollYProgress } = useContainerScrollContext()

  const insetY = useTransform(scrollYProgress, progressRange, insetYRange)
  const insetX = useTransform(scrollYProgress, progressRange, insetXRange)
  const roundedness = useTransform(scrollYProgress, roundednessProgressRange, roundednessRange)

  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`

  return (
    <motion.div
      ref={ref}
      className={cn("relative pointer-events-none overflow-hidden", className)}
      style={{
        clipPath,
        ...style,
      }}
      {...props} />
  );
})
ContainerInset.displayName = "ContainerInset"
