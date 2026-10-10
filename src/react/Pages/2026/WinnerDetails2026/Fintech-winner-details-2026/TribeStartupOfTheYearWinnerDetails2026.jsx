import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import {
  Activity,
  AlignLeft,
  Award,
  Briefcase,
  CheckCircle2,
  HandCoins,
  Layers,
  Send,
  ShieldCheck,
} from "lucide-react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";
import WinnersConfetti2026 from "../../Winners2026/components/WinnersConfetti2026";

const EASE = [0.16, 1, 0.3, 1];
const DISPLAY = "Oswald, sans-serif";
const CIRCUIT = "/assets/svgs/download.svg";

const AWARD = "Startup of the Year 2026";

const FEATURES = [
  {
    title: "International Money Transfers",
    body: "3ribe enables customers to send money to 150+ countries, providing a simple digital experience for cross-border transfers with features such as real-time transaction tracking and transparent exchange rates.",
    Icon: Send,
  },
  {
    title: "One Platform for Global Transactions",
    body: "The 3ribe app brings together international transfers, payment tracking, currency management, bill payments and expense management, giving customers access to multiple financial services through one platform.",
    Icon: Layers,
  },
  {
    title: "Business Payment Infrastructure",
    body: "3ribe Business provides collections, payouts, multi-currency accounts and compliance capabilities for businesses managing financial operations across different markets. Its platform is designed to help businesses launch, manage and scale cross-border payment flows.",
    Icon: Briefcase,
  },
  {
    title: "Global Collections & Payouts",
    body: "Businesses can collect payments in 26+ currencies and make payouts across 170+ countries and 70+ currencies. These capabilities support use cases including payroll, supplier payments, customer refunds and other business disbursements.",
    Icon: HandCoins,
  },
  {
    title: "Compliance & Transaction Monitoring",
    body: "3ribe Business provides compliance capabilities including automated KYC and AML checks, regulatory reporting and real-time transaction monitoring, helping businesses integrate compliance into their payment operations.",
    Icon: Activity,
  },
  {
    title: "Secure & Regulated Operations",
    body: "3ribe operates through Grants PaymentSolutions Ltd, which is authorised and regulated by the UK Financial Conduct Authority for the provision of payment services and is licensed by HMRC as a Money Services Business. 3ribe also highlights security, authentication and compliance as core elements of its platform.",
    Icon: ShieldCheck,
  },
];

const COMPANY = "3ribe";
const PERSON = "";
const ROLE = "";
const LOGO = "/assets/img/winner-logos-26/Winners-logo-white/3ribe.png";
const LOGO_INVERT = false;
const INTRO_AWARD_LINES = [AWARD];
const TITLE_LINES = ["Startup", "of the Year", "2026"];
const META_DESCRIPTION = "3ribe, winner of Startup of the Year 2026 at the Brit FinTech Awards.";
const OVERVIEW = [
  "3ribe, a trading name of Grants Payment Solutions Ltd, is a digital financial platform focused on simplifying global money movement for individuals and businesses. Its platform brings together international money transfers, bill payments, currency management, business collections, payouts, and compliance capabilities within a unified digital experience.",
  "Designed for customers and businesses operating across borders, 3ribe combines technology, payment connectivity and financial tools to make international transactions more accessible, transparent and easier to manage.",
];
const FEATURES_HEADING = "Key Features of 3ribe";
const WHY_HEADING = "Why 3ribe deserves recognition?";
const WHY = [
  "3ribe demonstrates how technology can simplify the increasingly complex world of cross-border financial services by bringing multiple capabilities together within a single digital ecosystem.",
  "From international money transfers and bill payments for individuals to collections, payouts, multi-currency accounts and compliance tools for businesses, 3ribe addresses a broad range of financial needs through a unified platform.",
  "Its focus on simplifying cross-border transactions, improving visibility and providing accessible technology for both individuals and businesses reflects the innovation and technology-led approach expected from an emerging FinTech company.",
  "The Startup of the Year 2026 recognition celebrates 3ribe's innovative approach to connecting people and businesses with simpler, more accessible global financial services.",
];
const CONCLUSION = [
  "3ribe combines digital technology, cross-border payment capabilities, business financial tools and compliance-focused solutions to address the evolving needs of a globally connected economy.",
  "Its unified approach to international money movement and business payment operations demonstrates the potential of emerging FinTech platforms to make cross-border financial services simpler and more accessible.",
];
const CONGRATULATIONS = "Congratulations to 3ribe — Startup of the Year 2026.";

const toParagraphs = (value) => (Array.isArray(value) ? value : [value]);

const HIGHLIGHTS = [AWARD, AWARD.replace(/ 2026$/, ""), "3ribe Business", "3ribe"];
const HIGHLIGHT_PATTERN = new RegExp(
  `((?<![\\w])(?:${[...HIGHLIGHTS]
    .sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})(?![\\w]))`
);

const emphasize = (text) =>
  text.split(HIGHLIGHT_PATTERN).map((part, i) =>
    i % 2 ? <strong key={i} className="font-bold">{part}</strong> : part
  );

const TribeStartupOfTheYearWinnerDetails2026 = () => {
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
            className="relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-5 pt-6 md:px-8 md:pt-8 lg:grid-cols-12 lg:gap-8"
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
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="flex items-center justify-center pb-10 lg:col-span-5 lg:justify-end lg:pb-14"
            >
              <div className="flex w-full max-w-[400px] items-center justify-center lg:justify-end">
                {renderLogo(
                  "max-h-[140px] max-w-full drop-shadow-[0_6px_24px_rgba(200,16,46,0.55)]",
                  `${winner}, winner of ${AWARD}`,
                  "text-center text-5xl drop-shadow-[0_6px_24px_rgba(200,16,46,0.55)] sm:text-6xl"
                )}
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
                {emphasize(text)}
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
                      {emphasize(text)}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </motion.section>

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
                  {emphasize(text)}
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
                  {emphasize(text)}
                </p>
              ))}
              <p className="mb-0 mt-3 text-base font-semibold leading-relaxed text-zinc-900">
                {emphasize(CONGRATULATIONS)}
              </p>
            </motion.section>
          </div>
        </div>
      </article>
      </ArcRevealHero>
    </>
  );
};

export default TribeStartupOfTheYearWinnerDetails2026;
