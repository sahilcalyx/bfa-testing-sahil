'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  bgNode,
  titlePart1 = 'The Brit',
  titlePart2 = 'Fintech Awards',
  subtitle,
  ctaText,
  onCtaClick,
  scrollToExpand = 'Scroll to explore',
  children
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });

  const sectionRef = useRef(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
      setIsMobileState(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        // Slower and smoother expansion speed
        const scrollDelta = e.deltaY * 0.00065;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.006 : 0.004;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  // Card initial and target sizes - beautiful and perfectly responsive
  const initialWidth = isMobileState 
    ? windowDimensions.width * 0.9 
    : Math.min(windowDimensions.width * 0.65, 800);
  const initialHeight = isMobileState 
    ? windowDimensions.height * 0.45 
    : Math.min(windowDimensions.height * 0.55, 450);

  const mediaWidth = initialWidth + scrollProgress * (windowDimensions.width - initialWidth);
  const mediaHeight = initialHeight + scrollProgress * (windowDimensions.height - initialHeight);

  // Vertical Y-Center transitions from 76% (78% on mobile) down to 50% as it expands to fill the viewport
  const initialCenterY = isMobileState ? 78 : 76;
  const centerY = initialCenterY - scrollProgress * (initialCenterY - 50);

  // Border radius: transitions from 24px down to 0px
  const borderRadius = `${(1 - scrollProgress) * 24}px`;
  // Box shadow fades out completely at scrollProgress === 1
  const boxShadow = scrollProgress === 1 
    ? 'none' 
    : `0px 20px 60px rgba(0, 0, 0, ${0.2 * (1 - scrollProgress)})`;

  // Text translation: split horizontal text slide
  const textTranslateX = scrollProgress * (isMobileState ? 160 : 130);

  const handleCtaClickInternal = () => {
    setScrollProgress(1);
    setMediaFullyExpanded(true);
    setShowContent(true);
    if (onCtaClick) {
      onCtaClick();
    } else {
      setTimeout(() => {
        const nextSection = document.getElementById('bfa-stats-section');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  };

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden w-full relative'>
      <section
        className='relative flex flex-col items-center justify-start min-h-[100dvh] w-full'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          
          {/* Background Layer with opacity fading out as progress expands */}
          <motion.div
            className='absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}>
            {bgNode ? bgNode : bgImageSrc && (
              <Image
                src={bgImageSrc}
                alt='Background'
                width={1920}
                height={1080}
                className='w-screen h-screen object-cover'
                priority
              />
            )}
            <div className='absolute inset-0 bg-black/5' />
          </motion.div>

          <div className='w-full flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative overflow-hidden'>
              
              {/* Expanding Video/Media Container - Positioned initially in lower-middle section, centers itself on scroll */}
              {/* Expanding Video/Media Container - Positioned initially in lower-middle section, centers itself on scroll */}
              <div
                className='absolute z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none overflow-hidden group cursor-pointer'
                style={{
                  top: `${centerY}%`,
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  borderRadius: borderRadius,
                  boxShadow: boxShadow,
                }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className='w-full h-full transition-all duration-700 ease-out group-hover:scale-[1.018] group-hover:shadow-[0_25px_65px_rgba(200,16,46,0.15)] relative overflow-hidden'>
                  {mediaType === 'video' ? (
                    mediaSrc.includes('youtube.com') ? (
                      <div className='relative w-full h-full pointer-events-none'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={
                            mediaSrc.includes('embed')
                              ? mediaSrc +
                                (mediaSrc.includes('?') ? '&' : '?') +
                                'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                              : mediaSrc.replace('watch?v=', 'embed/') +
                                '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                                mediaSrc.split('v=')[1]
                          }
                          className='w-full h-full'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                        <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }}></div>
                        <motion.div
                          className='absolute inset-0 bg-black/5'
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: 0.1 - scrollProgress * 0.1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    ) : (
                      <div className='relative w-full h-full pointer-events-none'>
                        <video
                          src={mediaSrc}
                          poster={posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload='auto'
                          className='w-full h-full object-cover'
                          controls={false}
                          disablePictureInPicture
                          disableRemotePlayback
                        />
                        <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }}></div>
                        <motion.div
                          className='absolute inset-0 bg-black/5'
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: 0.1 - scrollProgress * 0.1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    )
                  ) : (
                    <div className='relative w-full h-full'>
                      <Image
                        src={mediaSrc}
                        alt={titlePart1 + ' ' + titlePart2}
                        width={1280}
                        height={720}
                        className='w-full h-full object-cover'
                      />
                      <motion.div
                        className='absolute inset-0 bg-black/10'
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 0.1 - scrollProgress * 0.1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Title & Floating Branding Info - Positioned at the top half of the screen, stacked cleanly ABOVE the video */}
              <div 
                className='absolute top-[11dvh] sm:top-[12dvh] md:top-[11dvh] left-0 right-0 flex items-center justify-center text-center w-full z-10 transition-none flex-col px-4'
                style={{ pointerEvents: 'none' }}>
                
                {/* Stacked Vertical Title Container */}
                <div className='flex flex-col items-center justify-center gap-1 md:gap-2 w-full'>
                  
                  {/* First Word/Part Slides Left */}
                  <motion.div
                    style={{ x: `-${textTranslateX}vw`, opacity: 1 - scrollProgress }}
                    className="flex justify-center w-full"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold capitalize tracking-tight text-neutral-900 drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]'
                    >
                      {titlePart1}
                    </motion.h1>
                  </motion.div>

                  {/* Second Word/Part Slides Right (With elegant brand gradient) */}
                  <motion.div
                    style={{ x: `${textTranslateX}vw`, opacity: 1 - scrollProgress }}
                    className="flex justify-center w-full"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold capitalize tracking-tight text-transparent bg-clip-text bg-[linear-gradient(to_right,#000000_0%,#c8102e_50%,#000000_100%)] drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]'
                    >
                      {titlePart2}
                    </motion.h1>
                  </motion.div>

                </div>

                {/* Subtitle description Fades Out on scroll */}
                {subtitle && (
                  <motion.div
                    style={{ opacity: 1 - scrollProgress, scale: 1 - scrollProgress * 0.05 }}
                    className="w-full flex justify-center mt-4 md:mt-5"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                      className='text-xs sm:text-sm md:text-base lg:text-lg text-zinc-500 font-medium max-w-6xl text-center px-4 leading-relaxed drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]'
                    >
                      {subtitle}
                    </motion.p>
                  </motion.div>
                )}

                {/* CTA buttons Fades Out on scroll */}
                {ctaText && (
                  <motion.div
                    style={{ opacity: 1 - scrollProgress, scale: 1 - scrollProgress * 0.05 }}
                    className="mt-5 md:mt-7 pointer-events-auto"
                  >
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                      onClick={handleCtaClickInternal}
                      className='relative overflow-hidden border-none bg-gradient-to-r from-[#c8102e] to-[#a30b22] shadow-[0px_10px_35px_rgba(200,16,46,0.3)] hover:shadow-[0px_12px_40px_rgba(200,16,46,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 rounded-full px-10 py-3.5 group'
                    >
                      {/* Gloss Shimmer sweeping light flash effect on hover */}
                      <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out' />
                      
                      <span className='font-bold text-white uppercase tracking-widest text-xs md:text-sm relative z-10'>
                        {ctaText}
                      </span>
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Dynamic Floating Scroll Indicator at bottom */}
            {scrollToExpand && (
              <motion.div
                className='absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 z-20 pointer-events-none'
                style={{ opacity: 1 - scrollProgress * 2.5, scale: 1 - scrollProgress * 0.1 }}>
                <span className='text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]'>
                  {scrollToExpand}
                </span>
                <div className='w-5 h-8 border-2 border-zinc-300 rounded-full p-1 flex justify-center backdrop-blur-[2px] bg-white/20'>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                    className='w-1 h-1 bg-[#c8102e] rounded-full'
                  />
                </div>
              </motion.div>
            )}

            {/* Fades in children content below expansion once video covers screen */}
            {children && (
              <motion.section
                className='flex flex-col w-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}>
                {children}
              </motion.section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
