import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import WinnersHero2026 from "./components/WinnersHero2026";
import WinnerCard2026 from "./components/WinnerCard2026";
import WinnersConfetti2026 from "./components/WinnersConfetti2026";
import { winnerSections2026 } from "./winners2026";

const EASE = [0.16, 1, 0.3, 1];

const PAGE_TITLE = "Award Winners 2026 | Brit FinTech Awards 2026";
const PAGE_DESCRIPTION =
  "Meet the winners of the Brit FinTech Awards 2026 across FinTech, MSB and Global categories, celebrating innovation in UK financial technology and money services.";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" } },
};

const PAST_EDITIONS = [
  { label: "Winners 2025", to: "/award-winners-2025" },
  { label: "Winners 2024", to: "/award-winners-2024" },
];

const Winners2026 = () => {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(winnerSections2026[0].id);
  const [burstCount, setBurstCount] = useState(0);

  const selectSection = (id) => {
    if (id === activeId) return;
    setActiveId(id);
    setBurstCount((count) => count + 1);
  };
  const active = winnerSections2026.find((section) => section.id === activeId);

  const isSingle = active.awards.length === 1;
  const isCompact = active.awards.length <= 2;

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      <WinnersConfetti2026 burstKey={burstCount} reduceMotion={reduceMotion} />
      <WinnersHero2026 reduceMotion={reduceMotion} />

      <section
        className="relative bg-zinc-50 pb-24 md:pb-32"
        style={{
          backgroundImage: "radial-gradient(#e4e4e7 1.4px, transparent 1.4px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="relative z-20 py-3 bg-zinc-50/85 backdrop-blur-md border-b border-zinc-200/70">
          <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-center">
            <div
              role="tablist"
              aria-label="Award categories"
              className="inline-flex p-1.5 rounded-full bg-white border border-zinc-200 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
            >
              {winnerSections2026.map((section) => {
                const selected = section.id === activeId;
                return (
                  <button
                    key={section.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`winners-panel-${section.id}`}
                    onClick={() => selectSection(section.id)}
                    className={`relative px-4 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-300 cursor-pointer border-0 bg-transparent ${
                      selected ? "text-white" : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="winners-2026-tab-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8a0a1f] via-[#c8102e] to-[#8a0a1f] shadow-[0_8px_20px_-8px_rgba(200,16,46,0.7)]"
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <span className="hidden sm:inline">{section.label}</span>
                      <span className="sm:hidden">{section.shortLabel}</span>
                      <span
                        className={`text-[10px] rounded-full px-1.5 py-0.5 ${
                          selected ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"
                        }`}
                      >
                        {section.awards.length}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6 md:pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`winners-panel-${active.id}`}
              role="tabpanel"
              initial={reduceMotion ? false : "hidden"}
              animate="show"
              exit={reduceMotion ? undefined : "exit"}
              variants={gridVariants}
            >
              <motion.header
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-end mb-6 md:mb-8"
              >
                <div className="lg:col-span-7">
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#c8102e]">
                    Category
                  </span>
                  <h2 className="mt-1 mb-0 font-[Oswald,sans-serif] text-3xl md:text-4xl font-bold uppercase tracking-[-0.005em] text-zinc-900">
                    {active.label}
                  </h2>
                </div>
                <p className="lg:col-span-5 mb-0 text-sm md:text-base leading-relaxed text-zinc-500">
                  {active.description}
                </p>
              </motion.header>

              <motion.ul
                variants={gridVariants}
                className={`grid gap-6 md:gap-7 p-0 m-0 ${
                  isSingle
                    ? "grid-cols-1 max-w-md mx-auto"
                    : isCompact
                      ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {active.awards.map((award, index) => (
                  <WinnerCard2026
                    key={award.title}
                    award={award}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative mt-24 md:mt-28 overflow-hidden rounded-[32px] bg-[#0d0507] px-8 py-12 md:px-14 md:py-14"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#c8102e] opacity-30 blur-[100px]" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/50">
                  Our legacy
                </span>
                <h2 className="mt-3 mb-0 font-[Oswald,sans-serif] text-3xl md:text-4xl font-bold uppercase text-white">
                  Explore past winners
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {PAST_EDITIONS.map((edition) => (
                  <Link
                    key={edition.to}
                    to={edition.to}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white no-underline hover:bg-[#c8102e] hover:border-[#c8102e] hover:text-white transition-colors duration-300"
                  >
                    {edition.label}
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Winners2026;
