import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const DownloadAppStrip = () => {
  return (
    <section
      className="relative w-full overflow-hidden z-20 font-['Outfit',sans-serif]"
      style={{
        background:
          "linear-gradient(105deg, #6b0a18 0%, #3a0610 28%, #18040a 62%, #080306 100%)",
      }}
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_90%_at_0%_50%,rgba(200,16,46,0.55),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_90%_at_100%_50%,rgba(200,16,46,0.28),transparent_50%)]" />

      {/* Phone — right edge (hidden on mobile) */}
      <div className="pointer-events-none select-none absolute z-[5] inset-y-0 right-0 w-[42%] lg:w-[40%] xl:w-[38%] hidden md:block">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[85%] rounded-full blur-3xl opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(200,16,46,0.45) 0%, rgba(200,16,46,0.12) 45%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 20%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 20%, black 100%)",
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src="/assets/img/downloadapp-logos/Download-app-strip-section.png"
              alt="Brit FinTech Awards app on iPhone"
              className="absolute top-[4%] left-0 right-0 bottom-[-8%] w-full h-auto min-h-[108%] object-cover object-[18%_28%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.75)]"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-10 lg:px-14 pt-[5rem] sm:pt-[5.5rem] md:pt-24 pb-5 sm:pb-6 md:pb-0">
        <div className="flex items-stretch min-h-0 md:min-h-[190px] lg:min-h-[200px]">
          <div className="w-full md:w-[58%] lg:w-[55%] xl:w-[52%] flex flex-col justify-center items-start text-left py-3.5 sm:py-5 md:py-6 lg:py-7">
            <div className="w-full max-w-[40rem]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-white/55 font-semibold mb-1.5 md:mb-2"
              >
                Now available
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="text-[1.2rem] sm:text-[1.55rem] md:text-[1.9rem] lg:text-[2.15rem] xl:text-[2.3rem] font-black text-white tracking-tight leading-[1.12] uppercase text-left"
              >
                <span className="block">Download</span>
                <span className="block">
                  <span className="font-medium text-white/90">The</span>{" "}
                  <span className="font-medium text-white/90">Official</span>{" "}
                  <span className="font-black text-white">BFA App</span>
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-1.5 sm:mt-2 md:mt-2.5 text-left"
              >
                <p className="text-[12px] sm:text-sm text-white/65 leading-snug sm:leading-relaxed">
                  Nominations, tickets, networking and live updates — your full
                  BFA26 experience in one place.{" "}
                  <NavLink
                    to="/download-app"
                    className="font-semibold text-white/75 hover:text-white underline-offset-4 hover:underline transition-colors"
                  >
                    Learn more
                  </NavLink>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="mt-3 sm:mt-3.5 md:mt-4 flex flex-row items-center justify-start gap-2.5 sm:gap-3.5 md:gap-4"
              >
                <div className="rounded-md bg-white p-0.5 sm:p-1 md:p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.4)] border border-white/20 shrink-0">
                  <img
                    src="/assets/img/download-app-qr.png"
                    alt="QR code to download the BFA App"
                    className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] md:w-[96px] md:h-[96px] object-contain block"
                    draggable={false}
                  />
                </div>

                <div
                  className="self-stretch w-px bg-white/25 shrink-0"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5">
                  <a
                    href="https://apps.apple.com/ng/app/brit-fintech-awards/id6779879087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 transition-transform duration-300 hover:scale-[1.04] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                  >
                    <img
                      src="/assets/img/downloadapp-logos/app store.png"
                      alt="Download on the App Store"
                      className="h-7 sm:h-9 md:h-11 w-auto object-contain rounded-lg border border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.4)] group-hover:border-white/40 transition-colors"
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.bfa.fintechapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 transition-transform duration-300 hover:scale-[1.04] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                  >
                    <img
                      src="/assets/img/downloadapp-logos/play store.png"
                      alt="Get it on Google Play"
                      className="h-7 sm:h-9 md:h-11 w-auto object-contain rounded-lg border border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.4)] group-hover:border-white/40 transition-colors"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Spacer for phone — desktop only */}
          <div className="hidden md:block md:w-[42%] lg:w-[45%] xl:w-[48%]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppStrip;
