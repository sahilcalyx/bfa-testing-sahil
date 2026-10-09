import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import {
  AlignLeft,
  Award,
  CheckCircle2,
  Globe2,
  Route,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";
import WinnersConfetti2026 from "../../Winners2026/components/WinnersConfetti2026";

const EASE = [0.16, 1, 0.3, 1];
const DISPLAY = "Oswald, sans-serif";

const AWARD = "Payment Innovator 2026";
const COMPANY = "Neema";
// White artwork on transparent: render on dark surfaces only.
const LOGO = "/assets/img/winner-logos-26/Winners-logo-white/Neema.png";

const KEY_POINTS = [
  {
    title: "Intelligent Payment Routing",
    body: "Neema's technology identifies the best transaction and exchange-fee combination, helping businesses optimise the cost and efficiency of cross-border payments.",
    Icon: Route,
  },
  {
    title: "Global Payment Connectivity",
    body: "Through a single API integration, Neema connects businesses to payment capabilities across 120+ countries and 90+ currencies, simplifying access to global payment infrastructure.",
    Icon: Globe2,
  },
  {
    title: "Real-Time Payment Delivery",
    body: "Neema enables fast cross-border payments, with 98% of transactions delivered in real time and 99% successful payment delivery, supporting reliable movement of funds across international corridors.",
    Icon: Zap,
  },
  {
    title: "Flexible Payout Options",
    body: "Neema supports payouts to bank accounts, mobile wallets, cards, and cash pickups, giving businesses multiple ways to deliver funds based on recipient needs and local market requirements.",
    Icon: Wallet,
  },
  {
    title: "Secure & Efficient Infrastructure",
    body: "Neema combines intelligent payment technology with security and compliance controls to support reliable international transactions while helping businesses manage cross-border payments through a single integration.",
    Icon: ShieldCheck,
  },
];

const CIRCUIT = "/assets/svgs/download.svg";

const GREETING_HOLD = 2300;
const REVEAL_DURATION = 1500;
// Hero content mounts behind the intro overlay; this is when the curtain clears.
const INTRO_SECONDS = (GREETING_HOLD + 220 + REVEAL_DURATION * 0.9) / 1000;

const NeemaPaymentInnovatorWinnerDetails2026 = () => {
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
        <title>{COMPANY}: {AWARD} | Brit FinTech Awards</title>
        <meta
          name="description"
          content="Neema, winner of Payment Innovator 2026 at the Brit FinTech Awards."
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
            text: `${AWARD}\n${COMPANY}`,
            content: (
              <span className="flex flex-col items-center">
                <motion.img
                  src={LOGO}
                  alt={COMPANY}
                  className="h-36 w-auto object-contain drop-shadow-[0_6px_24px_rgba(200,16,46,0.6)] sm:h-44 md:h-52"
                  initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: EASE }}
                />
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
                  {AWARD}
                </motion.span>
              </span>
            ),
          },
        ]}
        greetingHold={GREETING_HOLD}
        revealDuration={REVEAL_DURATION}
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
                <span className="block" style={{ fontFamily: DISPLAY }}>
                  Payment
                </span>
                <span className="block" style={{ fontFamily: DISPLAY }}>
                  Innovator
                </span>
                <span className="block text-white/85" style={{ fontFamily: DISPLAY }}>
                  2026
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="flex items-center justify-center pb-10 lg:col-span-5 lg:justify-end lg:pb-14"
            >
              <div className="flex w-full max-w-[400px] items-center justify-center lg:justify-end">
                <motion.img
                  src={LOGO}
                  alt={`${COMPANY}, winner of ${AWARD}`}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 0.7, filter: "blur(12px)", clipPath: "circle(0% at 50% 50%)" }
                  }
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", clipPath: "circle(75% at 50% 50%)" }}
                  transition={{ duration: 1.1, ease: EASE, delay: reduceMotion ? 0 : INTRO_SECONDS }}
                  className="h-[150px] w-auto max-w-full object-contain drop-shadow-[0_6px_24px_rgba(200,16,46,0.55)] sm:h-[180px]"
                />
              </div>
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
              Neema is a global cross-border payments platform helping businesses
              move money faster, more reliably, and more efficiently. Through a
              single API integration, Neema provides access to 120+ countries and
              90+ currencies, combining intelligent routing with real-time payment
              infrastructure.
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
              Key Features of Neema
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <h2 className="m-0 flex items-center gap-2 text-2xl font-semibold text-[#c8102e]">
                <Award size={22} aria-hidden="true" />
                Why Neema deserves recognition?
              </h2>
              <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                Neema is helping modernise cross-border payments by combining
                intelligent routing, global payment connectivity, single API
                integration, flexible payout options, and reliable real-time
                delivery.
              </p>
              <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                Its ability to identify the best transaction and exchange-fee
                combination, alongside 98% real-time transaction delivery and 99%
                successful payment delivery, demonstrates a strong focus on improving
                the speed, efficiency, and reliability of international payments.
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
                Neema&apos;s technology-led approach provides businesses with a
                simpler and more efficient way to move money internationally. Its
                combination of intelligent routing, broad payment coverage, flexible
                payouts, single API integration, and reliable delivery makes it a
                deserving recipient of the {AWARD} award.
              </p>
              <p className="mb-0 mt-3 text-base font-semibold leading-relaxed text-zinc-900">
                Congratulations to {COMPANY} — {AWARD}.
              </p>
            </motion.section>
          </div>
        </div>
      </article>
      </ArcRevealHero>
    </>
  );
};

export default NeemaPaymentInnovatorWinnerDetails2026;
