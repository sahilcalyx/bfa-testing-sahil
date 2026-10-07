import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { Activity, AlignLeft, Award, CheckCircle2, MousePointerClick, ShieldBan, TrendingUp } from "lucide-react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";
import WinnersConfetti2026 from "../Winners2026/components/WinnersConfetti2026";

const EASE = [0.16, 1, 0.3, 1];
const DISPLAY = "Oswald, sans-serif";

const AWARD = "Account 2 Account Payment Processor of the Year 2026";
const PORTRAIT = "/assets/img/winners2025-logs-banner/Volume-winner25-banner.png";
const LOGO = "/assets/img/attendee-logos/volume.png";

const KEY_POINTS = [
  {
    title: "Seamless Transaction Tracking",
    body: "Real-time traceability of every cross-border transaction ensures transparency, reducing queries, speeding up resolutions, and building trust.",
    Icon: Activity,
  },
  {
    title: "User-Centred Interface",
    body: "An intuitive, clean interface designed for money transfers, simplifying the process, enhancing user experience, and minimising drop-offs.",
    Icon: MousePointerClick,
  },
  {
    title: "Enhanced Conversion",
    body: "Cardless payment experiences reduce friction for customers.",
    Icon: TrendingUp,
  },
  {
    title: "No Chargebacks",
    body: "Leveraging Open Banking to eliminate chargebacks, cutting costs associated with disputes and maintaining a healthy bottom line, which is crucial in this tight-margin industry.",
    Icon: ShieldBan,
  },
];

const CIRCUIT = "/assets/svgs/download.svg";

const Account2AccountWinnerDetails2026 = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const still = ["0%", "0%"];
  const blobY = useTransform(scrollYProgress, [0, 1], reduceMotion ? still : ["-10%", "42%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? still : ["0%", "18%"]);

  return (
    <>
      <Helmet>
        <title>{AWARD} | Volume Payments Limited</title>
        <meta
          name="description"
          content="Volume Payments Limited, winner of Account 2 Account Payment Processor of the Year 2026 at the Brit FinTech Awards."
        />
      </Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      <WinnersConfetti2026 reduceMotion={reduceMotion} delay={2600} burst={false} />

      <ArcRevealHero
        greetings={[
          {
            text: "Account 2 Account Payment Processor of the Year\nVolume Payments Limited",
          },
        ]}
        greetingHold={1700}
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
                <span className="block" style={{ fontFamily: DISPLAY }}>
                  Account 2 Account
                </span>
                <span className="block" style={{ fontFamily: DISPLAY }}>
                  Payment Processor
                </span>
                <span className="block text-white/85" style={{ fontFamily: DISPLAY }}>
                  of the Year
                </span>
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
                  Volume Payments Limited
                </p>
                <span className="mt-4 inline-flex rounded-md bg-white px-3 py-1.5">
                  <img
                    src={LOGO}
                    alt="Volume"
                    className="h-8 w-auto max-w-[200px] object-contain object-left"
                  />
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="flex items-end justify-center lg:col-span-5 lg:justify-end"
            >
              <img
                src={PORTRAIT}
                alt="Volume Payments Limited, winner of Account 2 Account Payment Processor of the Year 2026"
                className="h-[340px] w-auto max-w-full object-contain object-bottom sm:h-[390px] lg:h-[440px]"
              />
            </motion.div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <h2 className="m-0 flex items-center gap-2 text-2xl font-semibold text-[#c8102e]">
              <AlignLeft size={22} aria-hidden="true" />
              Overview
            </h2>
            <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
              Volume Payments Ltd is a standout contender for {AWARD} due to its
              innovative approach to the money remittance industry.
            </p>
          </motion.section>

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-12"
          >
            <h2 className="m-0 text-2xl font-semibold text-[#c8102e]">
              Key points
            </h2>
            <ul className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-2">
              {KEY_POINTS.map((point) => (
                <li
                  key={point.title}
                  className="rounded-xl bg-[linear-gradient(to_right_bottom,#000000_0%,#12060a_22%,#6b1224_48%,#c8102e_74%,#e4233c_100%)] px-6 py-6 text-white"
                >
                  <point.Icon className="text-white" size={34} aria-hidden="true" />
                  <p className="mb-0 mt-4 text-lg font-semibold">
                    {point.title}
                  </p>
                  <p className="mb-0 mt-1.5 text-base leading-relaxed text-white/90">
                    {point.body}
                  </p>
                </li>
              ))}
            </ul>
          </motion.section>

          <div className="mt-12 flex flex-col gap-10">
            <motion.section
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <h2 className="m-0 flex items-center gap-2 text-2xl font-semibold text-[#c8102e]">
                <Award size={22} aria-hidden="true" />
                Why Volume Payments Ltd deserves recognition
              </h2>
              <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                Volume Payments Ltd&apos;s commitment to transparency, user-friendly
                design, and cost efficiency places it at the forefront of the
                remittance sector, meriting recognition as {AWARD}.
              </p>
            </motion.section>

            <motion.section
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <h2 className="m-0 flex items-center gap-2 text-2xl font-semibold text-[#c8102e]">
                <CheckCircle2 size={22} aria-hidden="true" />
                Conclusion
              </h2>
              <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                By simplifying cross-border transactions and enhancing trust and
                efficiency, Volume Payments Ltd sets a benchmark in the FinTech
                industry.
              </p>
            </motion.section>
          </div>
        </div>
      </article>
      </ArcRevealHero>
    </>
  );
};

export default Account2AccountWinnerDetails2026;
