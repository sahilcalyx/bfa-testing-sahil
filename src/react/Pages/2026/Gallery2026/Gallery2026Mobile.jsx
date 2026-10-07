"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const Gallery2026Mobile = ({ cards, title, subtitle, action }) => {
  const reduce = useReducedMotion();
  // front-of-stack card is image 1, so reverse to show 1 → 8 top to bottom
  const ordered = [...cards].reverse();

  return (
    <section className="w-full bg-white px-5 py-14">
      <div className="mx-auto max-w-md text-center">
        <h2 className="m-0 text-[10vw] font-normal !leading-none tracking-tight text-[#0b0b0c]">
          {title}
        </h2>
        {subtitle && (
          <p className="mb-0 mt-3 text-[3.8vw] leading-relaxed tracking-tight text-[#0b0b0c]/60">
            {subtitle}
          </p>
        )}
      </div>

      <div className="mx-auto mt-8 flex max-w-md flex-col gap-4">
        {ordered.map(({ item }) => (
          <motion.div
            key={item.src}
            className="overflow-hidden rounded-xl shadow-[0_14px_30px_-16px_rgba(0,0,0,0.45)]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={item.src}
              alt={item.alt ?? ""}
              width={item.width}
              height={item.height}
              sizes="(max-width: 768px) 92vw, 448px"
              className="block h-auto w-full"
            />
          </motion.div>
        ))}
      </div>

      {action && <div className="mt-8 text-center">{action}</div>}
    </section>
  );
};

export default Gallery2026Mobile;
