import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import {
  AlignLeft,
  Award,
  BadgeDollarSign,
  CheckCircle2,
  Globe2,
  Headphones,
  Smartphone,
  Wallet,
  Zap,
} from "lucide-react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";
import WinnersConfetti2026 from "../../Winners2026/components/WinnersConfetti2026";
import PreviousWinStrip2026 from "../components/PreviousWinStrip2026";

const EASE = [0.16, 1, 0.3, 1];
const DISPLAY = "Oswald, sans-serif";
const CIRCUIT = "/assets/svgs/download.svg";

const AWARD = "Remittance Innovator MSB 2026";

const FEATURES = [
  {
    title: "Fast & Reliable Money Transfers",
    body: "Red Sea Money Transfer focuses on delivering funds quickly and reliably, helping customers send money internationally through a streamlined transfer experience.",
    Icon: Zap,
  },
  {
    title: "Award-Winning Mobile App",
    body: "Its mobile app enables customers to register, arrange transfers, make payments, and track transactions, providing a convenient digital remittance experience.",
    Icon: Smartphone,
  },
  {
    title: "Flexible Digital Transfers & Payouts",
    body: "Customers can initiate transfers easily online, with flexible payout options for recipients including bank accounts, cash pickup, or mobile wallets.",
    Icon: Wallet,
  },
  {
    title: "Transparent & Competitive Pricing",
    body: "Red Sea Money Transfer provides honest, upfront rates with no hidden fees, giving customers maximum value on every international transfer.",
    Icon: BadgeDollarSign,
  },
  {
    title: "Global Payment Reach",
    body: "The company supports international transfers across multiple destinations, giving customers convenient ways to send money to family, friends, and other recipients.",
    Icon: Globe2,
  },
  {
    title: "Customer-Focused Service",
    body: "With accessible support and digital tools such as transfer tracking, the company places convenience and ease of use at the centre of its remittance service.",
    Icon: Headphones,
  },
];

const COMPANY = "Red Sea Money Transfer";
const PERSON = "";
const ROLE = "";
const LOGO = "/assets/img/winner-logos-26/Winners-logo-white/Redsea.png";
const LOGO_INVERT = false;
const INTRO_AWARD_LINES = ["Remittance Innovator", "MSB 2026"];
const TITLE_LINES = ["Remittance", "Innovator MSB", "2026"];
const META_DESCRIPTION = "Red Sea Money Transfer, winner of Remittance Innovator MSB 2026 at the Brit FinTech Awards.";
const OVERVIEW = [
  "Red Sea Money Transfer is a UK-based money remittance provider focused on making international transfers simple, quick, and secure. Through its digital services, the company provides customers with convenient ways to send money internationally while keeping the transfer experience accessible and easy to manage.",
];
const FEATURES_HEADING = "Key Features of Red Sea Money Transfer";
const WHY_HEADING = "Why Red Sea Money Transfer Deserves Recognition?";
const WHY = [
  "Red Sea Money Transfer demonstrates a strong focus on improving the international remittance experience through digital technology, transparent pricing, and flexible transfer and payout options. Its mobile application and customer-focused approach reflect the evolving expectations of today's remittance customers.",
  "The Remittance Innovator MSB 2026 recognition celebrates the company's contribution to creating a more convenient, transparent, and digitally enabled approach to international money transfer.",
];
const CONCLUSION = [
  "Red Sea Money Transfer combines digital innovation, flexible payout options, transparent pricing, and customer-focused services to simplify international remittances. Its continued focus on convenience, value, and accessibility makes it a deserving recipient of the Remittance Innovator MSB 2026 award.",
];
const CONGRATULATIONS = "Congratulations to RED SEA MONEY TRANSFER LTD — Remittance Innovator MSB 2026.";

const toParagraphs = (value) => (Array.isArray(value) ? value : [value]);

const RedSeaRemittanceInnovatorMsbWinnerDetails2026 = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [logoFailed, setLogoFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const still = ["0%", "0%"];
  const blobY = useTransform(scrollYProgress, [0, 1], reduceMotion ? still : ["-10%", "42%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? still : ["0%", "18%"]);

  const winner = PERSON || COMPANY;
  const tone = LOGO_INVERT ? "brightness-0 invert" : "";

  const renderLogo = (className, alt, wordmarkClassName) =>
    logoFailed ? (
      <span
        className={`block font-bold uppercase leading-none tracking-[0.04em] text-white ${wordmarkClassName}`}
        style={{ fontFamily: DISPLAY }}
      >
        {COMPANY}
      </span>
    ) : (
      <img
        src={LOGO}
        alt={alt}
        onError={() => setLogoFailed(true)}
        className={`w-auto object-contain ${tone} ${className}`}
      />
    );

  return (
    <>
      <Helmet>
        <title>{`${winner}: ${AWARD} | Brit FinTech Awards`}</title>
        <meta name="description" content={META_DESCRIPTION} />
      </Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      <WinnersConfetti2026 reduceMotion={reduceMotion} delay={2600} burst={false} />

      <ArcRevealHero
        greetings={[
          {
            text: `${AWARD}\n${winner}`,
            content: (
              <span className="flex flex-col items-center">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  {renderLogo(
                    "h-16 max-w-[80vw] drop-shadow-[0_6px_24px_rgba(200,16,46,0.6)] sm:h-20 md:h-24",
                    COMPANY,
                    "text-5xl sm:text-6xl md:text-7xl"
                  )}
                </motion.span>
                <motion.span
                  aria-hidden="true"
                  className="my-4 block h-[3px] w-24 origin-center rounded-full bg-[#c8102e] shadow-[0_0_16px_rgba(200,16,46,0.85)] sm:my-5 sm:w-32"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                />
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
                >
                  {INTRO_AWARD_LINES.map((line, i) => (
                    <span key={line} className={`block ${i > 0 ? "mt-2" : ""}`}>
                      {line}
                    </span>
                  ))}
                  {PERSON && (
                    <span className="mt-4 block text-lg text-white/70 sm:text-xl md:text-2xl">
                      {PERSON}
                    </span>
                  )}
                </motion.span>
              </span>
            ),
          },
        ]}
        greetingHold={2000}
        revealDuration={1500}
        className="min-h-0 overflow-visible bg-transparent"
        introClassName="fixed inset-0 z-[200] h-dvh bg-[#070709]"
        greetingClassName="whitespace-pre-line font-[Oswald,sans-serif] text-[1.65rem] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
      >
      <article className="bg-zinc-50 text-zinc-900">
        <section
          ref={heroRef}
          className="relative mt-[94px] overflow-hidden bg-[#070709] text-white"
        >
          <motion.div
            aria-hidden="true"
            style={{ y: blobY }}
            className="pointer-events-none absolute inset-0"
          >
            <motion.div
              className="absolute -left-[12%] top-[4%] h-[340px] w-[340px] rounded-full bg-[#c8102e]/55 blur-[90px]"
              animate={
                reduceMotion
                  ? undefined
                  : { x: [0, 56, 0], y: [0, 32, 0], opacity: [0.35, 0.65, 0.35] }
              }
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.img
            src={CIRCUIT}
            alt=""
            aria-hidden="true"
            style={{
              scaleX: -1,
              filter: "drop-shadow(0 0 12px rgba(200,16,46,0.85)) brightness(1.85)",
            }}
            className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-[42%] object-cover opacity-90"
          />
          <motion.img
            src={CIRCUIT}
            alt=""
            aria-hidden="true"
            style={{
              filter: "drop-shadow(0 0 12px rgba(200,16,46,0.85)) brightness(1.85)",
            }}
            className="pointer-events-none absolute right-0 top-0 z-[1] h-full w-[42%] object-cover object-right opacity-90"
          />

          <motion.div
            style={{ y: contentY }}
            className="relative z-10 mx-auto grid max-w-6xl items-end gap-6 px-5 pt-6 md:px-8 md:pt-8 lg:grid-cols-12 lg:gap-8"
          >
            <div className="pb-8 md:pb-10 lg:col-span-7">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <Link
                  to="/award-winners-2026"
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70 no-underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <FiArrowLeft aria-hidden="true" />
                  Winners 2026
                </Link>
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
                className="mb-0 mt-8 text-[2.15rem] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.4rem]"
              >
                {TITLE_LINES.map((line, i) => (
                  <span
                    key={line}
                    className={`block ${i === TITLE_LINES.length - 1 ? "text-white/85" : ""}`}
                    style={{ fontFamily: DISPLAY }}
                  >
                    {line}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
                className="mt-8"
              >
                <p className="m-0 text-[11px] font-bold uppercase tracking-[0.26em] text-white/50">
                  Winner
                </p>
                <p
                  className="mb-0 mt-1 text-xl font-semibold uppercase tracking-[0.02em] text-white md:text-2xl"
                  style={{ fontFamily: DISPLAY }}
                >
                  {winner}
                </p>
                {ROLE && (
                  <p className="mb-0 mt-1 text-sm font-medium text-white/70 md:text-base">
                    {ROLE}
                  </p>
                )}
                <div className="mt-4">
                  {renderLogo(
                    "block h-12 max-w-[220px] object-left",
                    COMPANY,
                    "text-3xl"
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="flex items-center justify-center pb-10 lg:col-span-5 lg:justify-end lg:pb-14"
            >
              <div className="relative flex h-[260px] w-full max-w-[400px] items-center justify-center sm:h-[300px] lg:h-[340px]">
                <motion.div
                  aria-hidden="true"
                  className="absolute h-56 w-56 rounded-full bg-[#c8102e]/60 blur-3xl"
                  animate={
                    reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }
                  }
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="relative flex w-full items-center justify-center rounded-[28px] border border-white/15 bg-white/[0.06] px-10 py-14 backdrop-blur-sm"
                  animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {renderLogo(
                    "max-h-[140px] max-w-[85%] drop-shadow-[0_6px_24px_rgba(200,16,46,0.55)]",
                    `${winner}, winner of ${AWARD}`,
                    "text-center text-5xl drop-shadow-[0_6px_24px_rgba(200,16,46,0.55)] sm:text-6xl"
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <h2 className="m-0 flex items-center gap-2 text-2xl font-semibold text-[#c8102e]">
              <AlignLeft size={22} aria-hidden="true" />
              Overview
            </h2>
            {toParagraphs(OVERVIEW).map((text) => (
              <p key={text} className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                {text}
              </p>
            ))}
          </motion.section>

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-12"
          >
            <h2 className="m-0 text-2xl font-semibold text-[#c8102e]">
              {FEATURES_HEADING}
            </h2>
            <ul className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-2">
              {FEATURES.map((point) => (
                <li
                  key={point.title}
                  className="rounded-xl bg-[linear-gradient(to_right_bottom,#000000_0%,#12060a_22%,#6b1224_48%,#c8102e_74%,#e4233c_100%)] px-6 py-6 text-white"
                >
                  <point.Icon className="text-white" size={34} aria-hidden="true" />
                  <p className="mb-0 mt-4 text-lg font-semibold">
                    {point.title}
                  </p>
                  {toParagraphs(point.body).map((text) => (
                    <p key={text} className="mb-0 mt-1.5 text-base leading-relaxed text-white/90">
                      {text}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </motion.section>

          <PreviousWinStrip2026
            className="mt-12"
            year="2025"
            eyebrow="Back-to-Back Winner"
            title="MSB App of the Year 2025"
            description="Named MSB App of the Year in 2025 and Remittance Innovator MSB in 2026, Red Sea Money Transfer continues to make international transfers simple, quick and secure through its digital services."
            href="/award-winners-2025/red-sea-money-transfer-msb-app-of-the-year-2025"
          />

          <PreviousWinStrip2026
            className="mt-8"
            year="2024"
            eyebrow="Hat-Trick Winner · Three Years Running"
            title="Where the Hat-Trick Began: MSB Disruptor of the Year 2024"
            description="MSB Disruptor in 2024, MSB App of the Year in 2025 and Remittance Innovator MSB in 2026. Red Sea Money Transfer's hat-trick spans three different categories, a sign of how widely it innovates."
            href="/award-winners-2024/red-sea-ltd-msb-disruptor-of-the-year-2024"
            ctaLabel="View 2024 Recognition"
            streak={["2024", "2025", "2026"]}
          />

          <div className="mt-12 flex flex-col gap-10">
            <motion.section
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <h2 className="m-0 flex items-center gap-2 text-2xl font-semibold text-[#c8102e]">
                <Award size={22} aria-hidden="true" />
                {WHY_HEADING}
              </h2>
              {toParagraphs(WHY).map((text) => (
                <p key={text} className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                  {text}
                </p>
              ))}
            </motion.section>

            <motion.section
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <h2 className="m-0 flex items-center gap-2 text-2xl font-semibold text-[#c8102e]">
                <CheckCircle2 size={22} aria-hidden="true" />
                Conclusion
              </h2>
              {toParagraphs(CONCLUSION).map((text) => (
                <p key={text} className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                  {text}
                </p>
              ))}
              <p className="mb-0 mt-3 text-base font-semibold leading-relaxed text-zinc-900">
                {CONGRATULATIONS}
              </p>
            </motion.section>
          </div>
        </div>
      </article>
      </ArcRevealHero>
    </>
  );
};

export default RedSeaRemittanceInnovatorMsbWinnerDetails2026;
