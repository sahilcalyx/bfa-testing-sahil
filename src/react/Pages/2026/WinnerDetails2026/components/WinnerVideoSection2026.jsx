import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const WinnerVideoSection2026 = ({
  videoId,
  title,
  heading = "Winner Spotlight",
  className = "",
}) => {
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  if (!videoId) return null;

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: EASE }}
      className={className}
    >
      <div className="mx-auto w-full max-w-md">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="m-0 text-xl font-semibold text-[#c8102e] sm:text-2xl">
            {heading}
          </h2>
          <Link
            to="/video-gallery-2026"
            className="text-sm font-semibold text-[#c8102e] no-underline transition-colors hover:text-zinc-900"
          >
            More winner videos &rarr;
          </Link>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl bg-black shadow-[0_16px_36px_-22px_rgba(200,16,46,0.65)] ring-1 ring-black/10">
          <div className="relative aspect-video bg-black">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${title}`}
                className="absolute inset-0 block h-full w-full cursor-pointer border-0 bg-black p-0"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={title}
                  className="h-full w-full object-cover opacity-90 transition duration-300 hover:opacity-100 hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#e0193a] via-[#c8102e] to-[#8a0a1f] shadow-[0_0_0_6px_rgba(200,16,46,0.25)] transition-transform duration-300 hover:scale-110">
                  <Play
                    className="ml-0.5 fill-white text-white"
                    size={20}
                    aria-hidden="true"
                  />
                </span>
              </button>
            )}
          </div>
        </div>

        {title && (
          <p className="mb-0 mt-3 text-center text-sm font-semibold leading-snug text-zinc-900 sm:text-base">
            {title}
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default WinnerVideoSection2026;
