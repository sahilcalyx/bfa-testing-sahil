import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "./SliderMiniComponents/AppImage";
import Icon from "./SliderMiniComponents/AppIcon";

const HeroImageSlider2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Revolution",
      subtitle: "Complete visual transformation for tech startup",
      description:
        "A comprehensive rebranding project that elevated a fintech startup from obscurity to industry recognition through strategic visual storytelling and innovative design systems.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&h=1080&fit=crop&crop=center",
      category: "Branding",
      client: "TechFlow Solutions",
      year: "2024",
      tags: ["Identity Design", "Digital Strategy", "Brand Guidelines"],
    },
    {
      id: 2,
      title: "E-commerce Excellence",
      subtitle: "Award-winning online shopping experience",
      description:
        "Crafted an immersive e-commerce platform that increased conversion rates by 340% through intuitive UX design and cutting-edge visual presentation.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=1920&h=1080&fit=crop&crop=center",
      category: "Web Design",
      client: "Luxe Retail Co.",
      year: "2024",
      tags: ["UX/UI Design", "E-commerce", "Conversion Optimization"],
    },
    {
      id: 3,
      title: "Motion Graphics Mastery",
      subtitle: "Cinematic storytelling through animation",
      description:
        "Produced a series of motion graphics that transformed complex data into compelling visual narratives, earning recognition at international design festivals.",
      image:
        "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg?w=1920&h=1080&fit=crop&crop=center",
      category: "Motion Design",
      client: "DataViz Studios",
      year: "2024",
      tags: ["Animation", "Data Visualization", "Storytelling"],
    },
    {
      id: 4,
      title: "Digital Art Installation",
      subtitle: "Interactive experience design",
      description:
        "Created an immersive digital installation that blends physical and virtual spaces, showcasing the future of interactive design and user engagement.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center",
      category: "Interactive",
      client: "Modern Art Museum",
      year: "2024",
      tags: ["Interactive Design", "Digital Art", "User Experience"],
    },
    {
      id: 5,
      title: "Mobile App Innovation",
      subtitle: "Next-generation user interface",
      description:
        "Designed a revolutionary mobile application interface that redefined user interaction patterns and set new standards for mobile UX design.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=1920&h=1080&fit=crop&crop=center",
      category: "Mobile Design",
      client: "InnovateTech",
      year: "2024",
      tags: ["Mobile UI", "App Design", "Innovation"],
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    } else {
      clearInterval(intervalRef?.current);
    }
    return () => clearInterval(intervalRef?.current);
  }, [isPlaying, currentSlide]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % portfolioItems?.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioItems?.length) % portfolioItems?.length
    );
  };

  const handleSlideSelect = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const currentItem = portfolioItems?.[currentSlide];

  return (
    <div
      className="position-relative w-100 vh-100 overflow-hidden bg-dark text-light"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      {/* Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.4 },
            }}
            className="position-absolute w-100 h-100"
          >
            <Image
              src={currentItem?.image}
              alt={currentItem?.title}
              className="w-100 h-100 object-fit-cover"
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(13,13,13,0.9), rgba(13,13,13,0.4), transparent)",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content (centered) */}
      <div className="position-relative z-2 h-100 d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <div className="mb-3 d-inline-flex align-items-center px-3 py-1 rounded-pill border border-warning text-warning bg-warning bg-opacity-10">
              <span
                className="me-2 d-inline-block rounded-circle bg-warning pulse"
                style={{ width: 8, height: 8 }}
              />
              <span className="fw-medium small">{currentItem?.category}</span>
            </div>

            <h1 className="display-4 fw-bold text-light mb-3">
              {currentItem?.title}
            </h1>
            <p className="h5 text-light opacity-75 mb-4">
              {currentItem?.subtitle}
            </p>
            <p className="lead text-light opacity-50 mb-4">
              {currentItem?.description}
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-4 text-light opacity-50 small mb-3">
              <div className="d-flex align-items-center gap-2">
                <Icon name="Building" size={16} />
                <span>{currentItem?.client}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>{currentItem?.year}</span>
              </div>
            </div>

            <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
              {currentItem?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="badge rounded-pill bg-light text-dark border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <button className="btn btn-warning text-dark fw-bold shadow">
                View Project
              </button>
              <button className="btn btn-outline-light fw-bold">
                Explore Portfolio
              </button>
            </div>

            {/* Indicators under content */}
            <div className="d-flex justify-content-center gap-3 mt-5">
              {portfolioItems?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideSelect(index)}
                  className="border-0 rounded-pill"
                  style={{
                    width: "70px",
                    height: "6px",
                    backgroundColor:
                      index === currentSlide
                        ? "#c8102e"
                        : "rgba(255,255,255,0.3)",
                    boxShadow:
                      index === currentSlide
                        ? "0 0 10px rgba(255,193,7,0.7)"
                        : "none",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-2">
        <div className="d-flex align-items-center gap-3 px-4 py-2 rounded-pill border bg-dark bg-opacity-50">
          <button
            onClick={handlePrev}
            className="btn btn-sm btn-outline-light rounded-circle"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <button
            onClick={togglePlayPause}
            className="btn btn-sm btn-warning rounded-circle"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
          </button>

          <button
            onClick={handleNext}
            className="btn btn-sm btn-outline-light rounded-circle"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          <span className="text-light small">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(portfolioItems?.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSlider2025;
