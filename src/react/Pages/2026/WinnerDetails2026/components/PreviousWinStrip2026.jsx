import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];
const DISPLAY = "Oswald, sans-serif";

const PreviousWinStrip2026 = ({
  year,
  eyebrow,
  title,
  description,
  href,
  ctaLabel,
  streak,
  className = "",
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const shown = reduceMotion || inView;
  const label = ctaLabel || `View ${year} Recognition`;
  const kicker = eyebrow || `Brit FinTech Awards ${year} Winner`;

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: EASE }}
      className={className}
    >
      <Link
        to={href}
        aria-label={`${label}: ${title}`}
        title={label}
        className="group relative block rounded-[28px] text-white no-underline transition-transform duration-500 ease-out hover:-translate-y-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8102e]"
      >
        <aside className="relative overflow-hidden rounded-[28px] bg-[#0b0b0e] text-white ring-1 ring-white/10 shadow-[0_30px_60px_-34px_rgba(200,16,46,0.75)] transition-[box-shadow] duration-500 group-hover:shadow-[0_36px_70px_-30px_rgba(200,16,46,0.95)] group-hover:ring-[#c8102e]/60">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-6 left-0 z-[5] w-1/4 -translate-x-[150%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[500%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #ffffff 0 1px, transparent 1px 14px)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c8102e]/45 blur-3xl"
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 block h-[3px] origin-left bg-gradient-to-r from-[#c8102e] via-[#ff4d63] to-transparent"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={shown ? { scaleX: 1 } : undefined}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          />

          <div className="relative z-10 grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-0 md:p-0">
            <div className="flex items-center md:justify-center md:border-r md:border-white/10 md:px-12 md:py-10">
              <div className="relative leading-none" style={{ fontFamily: DISPLAY }}>
                <span
                  className="block text-[5rem] font-bold tracking-[-0.04em] text-transparent md:text-[7rem]"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.55)" }}
                >
                  {year}
                </span>
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 block text-[5rem] font-bold tracking-[-0.04em] text-[#c8102e] md:text-[7rem]"
                  initial={reduceMotion ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={shown ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
                >
                  {year}
                </motion.span>
              </div>
            </div>

            <div className="flex flex-col justify-center md:py-10 md:pl-10 md:pr-20">
              <p className="m-0 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">
                <Trophy size={14} className="text-[#ff4d63]" aria-hidden="true" />
                {kicker}
              </p>
              <h3
                className="mb-0 mt-2.5 text-2xl font-bold uppercase leading-[1.1] tracking-[-0.01em] text-white sm:text-[1.75rem] lg:text-3xl"
                style={{ fontFamily: DISPLAY }}
              >
                {title}
              </h3>
              {description && (
                <p className="mb-0 mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-[15px]">
                  {description}
                </p>
              )}
              {streak?.length > 0 && (
                <ol className="m-0 mt-5 flex list-none flex-wrap items-center gap-y-3 p-0">
                  {streak.map((streakYear, i) => (
                    <li key={streakYear} className="flex items-center">
                      {i > 0 && (
                        <motion.span
                          aria-hidden="true"
                          className="mx-2 block h-[2px] w-6 origin-left bg-gradient-to-r from-[#c8102e] to-[#ff4d63] sm:mx-3 sm:w-10"
                          initial={reduceMotion ? false : { scaleX: 0 }}
                          animate={shown ? { scaleX: 1 } : undefined}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.25 }}
                        />
                      )}
                      <motion.span
                        className="flex items-center gap-1.5 rounded-full border border-[#c8102e]/50 bg-[#c8102e]/15 px-3 py-1 text-xs font-bold tracking-[0.12em] text-white"
                        style={{ fontFamily: DISPLAY }}
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                        animate={shown ? { opacity: 1, scale: 1 } : undefined}
                        transition={{ duration: 0.45, ease: EASE, delay: 0.5 + i * 0.25 }}
                      >
                        <Trophy size={12} className="text-[#ff4d63]" aria-hidden="true" />
                        {streakYear}
                      </motion.span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </aside>

        <span
          aria-hidden="true"
          className="absolute right-5 top-7 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-[#c8102e] text-white shadow-[0_12px_30px_-8px_rgba(200,16,46,0.8)] transition-colors duration-300 group-hover:bg-[#a50d26] sm:right-7 sm:top-9 md:right-0 md:top-1/2 md:h-[72px] md:w-[72px] md:translate-x-1/2 md:-translate-y-1/2 md:border-[6px] md:border-zinc-50"
        >
          {!reduceMotion && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#c8102e]"
              animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <ArrowUpRight
            size={24}
            className="relative transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default PreviousWinStrip2026;
