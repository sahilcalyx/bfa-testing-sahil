import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import {
  AlignLeft,
  Award,
  BadgePercent,
  CheckCircle2,
  Code,
  Layers,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";
import WinnersConfetti2026 from "../../Winners2026/components/WinnersConfetti2026";

const EASE = [0.16, 1, 0.3, 1];
const DISPLAY = "Oswald, sans-serif";

const AWARD = "Account-to-Account Payment Processor 2026";
const LOGO = "/assets/img/winner-logos-26/Winners-logo-white/Fena.png";

const KEY_POINTS = [
  {
    title: "Instant Account-to-Account Payments",
    body: "Fena enables businesses to accept payments directly from customers’ bank accounts through Open Banking, with payments reaching the business account within seconds. Its platform is designed to provide faster payment processing and settlement compared with traditional payment methods.",
    Icon: Zap,
  },
  {
    title: "Open Banking Payment APIs",
    body: "Fena provides developer-focused APIs that allow businesses to integrate Open Banking payments directly into their websites and applications. Its API-led infrastructure supports businesses looking to offer seamless Pay by Bank experiences without requiring customers to use traditional card payments.",
    Icon: Code,
  },
  {
    title: "Flexible Payment Solutions",
    body: "Fena supports multiple ways for businesses to collect and move money, including Pay by Bank, payment links, invoice payments, QR-code payments, in-store payments, Variable Recurring Payments (VRP), and bulk payments. This gives businesses the flexibility to select payment methods that suit different customer and operational needs.",
    Icon: Layers,
  },
  {
    title: "Lower Payment Costs",
    body: "Fena states that businesses can save up to 85% compared with typical card processing fees, helping businesses reduce the cost of accepting payments. Its Open Banking approach also helps businesses avoid costly card chargebacks, providing an attractive alternative to traditional card-based payment processing.",
    Icon: BadgePercent,
  },
  {
    title: "Secure & Efficient Infrastructure",
    body: "Fena's Open Banking infrastructure is designed to provide secure and efficient payment processing, with capabilities including direct bank payments, rapid settlement, payment reconciliation, and secure customer bank authentication.",
    Icon: ShieldCheck,
  },
  {
    title: "Growing Merchant Adoption",
    body: "Fena's platform is trusted by more than 2,500 merchants in the UK, demonstrating growing adoption of account-to-account payments among businesses seeking faster and more cost-effective alternatives to traditional payment methods.",
    Icon: Users,
  },
];

const CIRCUIT = "/assets/svgs/download.svg";

const Strong = ({ children }) => <strong className="font-bold">{children}</strong>;

const emphasizeCompany = (text) =>
  text.split(/(\bFena\b)/).map((part, i) => (part === "Fena" ? <Strong key={i}>{part}</Strong> : part));

const FenaAccount2AccountWinnerDetails2026 = () => {
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
        <title>Fena: {AWARD} | Brit FinTech Awards</title>
        <meta
          name="description"
          content="Fena, winner of Account-to-Account Payment Processor 2026 at the Brit FinTech Awards."
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
            text: "Account-to-Account Payment Processor 2026\nFena",
            content: (
              <span className="flex flex-col items-center">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <img
                    src={LOGO}
                    alt="Fena"
                    className="h-14 w-auto max-w-[80vw] object-contain drop-shadow-[0_6px_24px_rgba(200,16,46,0.6)] sm:h-16 md:h-20"
                  />
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
                  <span className="block">Account-to-Account</span>
                  <span className="mt-2 block">Payment Processor 2026</span>
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
            className="relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-5 py-10 md:px-8 md:py-14 lg:min-h-[400px] lg:grid-cols-12 lg:gap-8"
          >
            <div className="lg:col-span-7">
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
                  Account-to-Account
                </span>
                <span className="block" style={{ fontFamily: DISPLAY }}>
                  Payment Processor
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
              className="flex items-center justify-center lg:col-span-5 lg:justify-end"
            >
              <img
                src={LOGO}
                alt="Fena, winner of Account-to-Account Payment Processor 2026"
                className="h-auto w-full max-w-[260px] object-contain drop-shadow-[0_6px_24px_rgba(200,16,46,0.45)] sm:max-w-[320px] lg:max-w-[380px]"
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
              <Strong>Fena</Strong> is a UK-based Open Banking payments provider focused on enabling
              fast, secure, and cost-efficient account-to-account payments. Its
              technology allows businesses to accept payments directly from
              customers’ bank accounts, with solutions designed for eCommerce,
              in-store payments, invoicing, payment links, recurring payments, bulk
              payments, and other payment use cases. <Strong>Fena</Strong> is trusted by more than
              2,500 merchants in the UK.
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
              Key Features of Fena
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
                    {emphasizeCompany(point.body)}
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
                Why Fena deserves recognition?
              </h2>
              <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                <Strong>Fena</Strong> demonstrates how Open Banking technology can modernise
                account-to-account payments by combining direct bank payments,
                flexible payment solutions, rapid settlement, and lower payment
                costs.
              </p>
              <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                Its ability to support Pay by Bank, payment links, invoice payments,
                QR-code payments, in-store payments, Variable Recurring Payments, and
                bulk payments provides businesses with multiple ways to collect and
                move money. At the same time, <Strong>Fena</Strong> states that businesses can save up
                to 85% compared with typical card processing fees while avoiding card
                chargebacks.
              </p>
              <p className="mb-0 mt-3 text-base leading-relaxed text-zinc-700">
                With more than 2,500 merchants in the UK using its platform, <Strong>Fena</Strong> is
                demonstrating growing demand for account-to-account payment
                solutions. With its focus on making account-to-account payments
                faster, more accessible, and more cost-effective, <Strong>Fena</Strong> is helping
                drive the continued adoption of Open Banking payments.
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
                <Strong>Fena</Strong> brings together Open Banking technology, flexible payment
                solutions, rapid settlement, and cost-efficient account-to-account
                payments to create a modern payment experience for businesses and
                their customers. Its ability to reduce payment costs, avoid card
                chargebacks, support multiple payment use cases, and serve more than
                2,500 UK merchants makes <Strong>Fena</Strong> a deserving recipient of the{" "}
                <Strong>{AWARD}</Strong> award.
              </p>
              <p className="mb-0 mt-3 text-base font-semibold leading-relaxed text-zinc-900">
                Congratulations to <Strong>Fena</Strong> — <Strong>{AWARD}</Strong>.
              </p>
            </motion.section>
          </div>
        </div>
      </article>
      </ArcRevealHero>
    </>
  );
};

export default FenaAccount2AccountWinnerDetails2026;
