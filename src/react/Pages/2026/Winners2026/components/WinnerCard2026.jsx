import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import WinnerImagePlaceholder2026 from "./WinnerImagePlaceholder2026";
import useSpotlight from "../hooks/useSpotlight";

const EASE = [0.16, 1, 0.3, 1];

export const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const WinnerCard2026 = ({ award, index, reduceMotion }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const handleMouseMove = useSpotlight();

  const showImage = Boolean(award.img) && !imgFailed;
  const person = award.person || "";
  const company = award.company || "";
  const announced = Boolean(person || company || award.name);
  const hasLink = Boolean(award.link);
  const winnerLabel = [person, company].filter(Boolean).join(", ") || award.name;
  const body = (
    <motion.article
      onMouseMove={handleMouseMove}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="group relative h-full flex flex-col rounded-[28px] bg-white border border-zinc-200/70 overflow-hidden shadow-[0_18px_40px_-24px_rgba(24,6,10,0.35)] hover:shadow-[0_30px_60px_-28px_rgba(200,16,46,0.45)] hover:border-[#c8102e]/30 transition-[box-shadow,border-color] duration-500"
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(200,16,46,0.08), transparent 45%)",
        }}
      />

      <div className="relative aspect-[3/2] overflow-hidden">
        {showImage ? (
          <>
            <img
              src={award.img}
              alt={`${winnerLabel || award.title} – Brit FinTech Awards 2026`}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            />
            {!reduceMotion && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-y-4 left-0 w-2/5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ skewX: -25 }}
                initial={{ x: "-160%" }}
                animate={{ x: "360%" }}
                transition={{
                  duration: 2.2,
                  ease: [0.45, 0, 0.55, 1],
                  repeat: Infinity,
                  repeatDelay: 2.4,
                  delay: (index % 6) * 0.35,
                }}
              />
            )}
          </>
        ) : (
          <WinnerImagePlaceholder2026 index={index} logo={award.logo} reduceMotion={reduceMotion} />
        )}
      </div>

      <div className="relative flex flex-1 items-start gap-4 px-6 py-6 md:px-7 md:py-7">
        <div className="min-w-0 flex-1">
          <h3 className="m-0 font-[Oswald,sans-serif] text-[1.15rem] md:text-[1.25rem] leading-[1.25] font-semibold text-zinc-900 tracking-[0.01em] transition-colors duration-300 group-hover:text-[#c8102e]">
            {award.title}
          </h3>
          {announced ? (
            <div className="mt-3 space-y-1">
              {person ? (
                <p className="mb-0 text-sm font-semibold leading-snug text-zinc-800">
                  {person}
                </p>
              ) : null}
              {company ? (
                <p className="mb-0 text-sm font-medium leading-snug text-zinc-500 break-words">
                  {company}
                </p>
              ) : null}
              {!person && !company && award.name ? (
                <p className="mb-0 text-sm font-medium leading-snug text-zinc-500 break-words">
                  {award.name}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <span
          className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-500 ${
            hasLink
              ? "border-zinc-200 text-zinc-700 group-hover:bg-[#c8102e] group-hover:border-[#c8102e] group-hover:text-white group-hover:rotate-45"
              : "border-zinc-200 bg-zinc-50 text-zinc-400 group-hover:bg-[#c8102e] group-hover:border-[#c8102e] group-hover:text-white"
          }`}
        >
          <FiArrowUpRight size={18} />
        </span>
      </div>
    </motion.article>
  );

  return (
    <motion.li variants={cardVariants} className="list-none h-full">
      {hasLink ? (
        <Link
          to={award.link}
          className="block h-full no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e] focus-visible:ring-offset-4 rounded-[28px]"
          aria-label={`${award.title}${announced ? ` – ${winnerLabel}` : ""}`}
        >
          {body}
        </Link>
      ) : (
        body
      )}
    </motion.li>
  );
};

export default WinnerCard2026;
