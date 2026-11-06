import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const INK = "#0E0E10";
const RED = "#C8102E";
const MUTE = "#5A5A60";

const HEADLINE = ["Driving", "excellence", "together"];
const STRIP_CARD_W = 176;

function SponsorCard({ sponsor, style, className, playWhenVisible = false, ...rest }) {
  const reduced = useReducedMotion();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!playWhenVisible || reduced || !video) return undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, [playWhenVisible, reduced]);

  const media = sponsor.video ? (
    <video
      ref={videoRef}
      src={sponsor.video}
      autoPlay={!reduced && !playWhenVisible}
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={sponsor.name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        pointerEvents: "none",
      }}
    />
  ) : (
    <span
      style={{
        display: "grid",
        placeItems: "center",
        height: "100%",
        color: "#fff",
        fontWeight: 700,
        fontSize: 13,
      }}
    >
      {sponsor.name}
    </span>
  );

  const shell = {
    display: "block",
    overflow: "hidden",
    borderRadius: 14,
    background: "#121214",
    boxShadow:
      "0 28px 60px -24px rgba(14,14,16,0.45), 0 10px 24px -12px rgba(14,14,16,0.25)",
    textDecoration: "none",
    ...style,
  };

  if (sponsor.external) {
    return (
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        title={sponsor.name}
        className={className}
        style={shell}
        {...rest}
      >
        {media}
      </a>
    );
  }
  return (
    <NavLink
      to={sponsor.link}
      title={sponsor.name}
      className={className}
      style={shell}
      {...rest}
    >
      {media}
    </NavLink>
  );
}

export default function SponsorStream2026({ sponsors }) {
  const stageRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setSize({ w: el.offsetWidth, h: el.offsetHeight });
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  const compact = size.w > 0 && size.w < 900;
  const cardW = compact
    ? 150
    : Math.round(Math.min(280, Math.max(200, size.w * 0.17)));
  const cardH = Math.round((cardW * 372) / 758);
  const gap = compact ? 10 : 16;

  const half = Math.ceil(sponsors.length / 2);
  const columns = [
    { side: -1, items: sponsors.slice(0, half) },
    { side: 1, items: sponsors.slice(half) },
  ];

  useGSAP(
    () => {
      if (reduced || !size.w) return undefined;

      const stage = stageRef.current;
      const cards = gsap.utils.toArray("[data-stream-card]", stage);
      const words = gsap.utils.toArray("[data-stream-word]", stage);
      const fades = gsap.utils.toArray("[data-stream-fade]", stage);

      if (compact) {
        const loops = gsap.utils.toArray("[data-strip-track]", stage).map((track) => {
          const leftward = Number(track.dataset.dir) < 0;
          return gsap.fromTo(
            track,
            { xPercent: leftward ? 0 : -50 },
            {
              xPercent: leftward ? -50 : 0,
              duration: Number(track.dataset.count) * 3.2,
              ease: "none",
              repeat: -1,
            }
          );
        });

        gsap
          .timeline({
            scrollTrigger: { trigger: stage, start: "top 80%", once: true },
          })
          .from(words, {
            autoAlpha: 0,
            y: 18,
            filter: "blur(14px)",
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
          })
          .from(
            fades,
            { autoAlpha: 0, y: 14, duration: 0.8, stagger: 0.1, ease: "power2.out" },
            0.35
          )
          .from(
            "[data-strip]",
            {
              autoAlpha: 0,
              x: (i) => (i ? 80 : -80),
              duration: 1.1,
              stagger: 0.12,
              ease: "power3.out",
            },
            0.45
          );

        ScrollTrigger.create({
          trigger: stage,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const boost = 1 + Math.min(4, Math.abs(self.getVelocity()) / 600);
            loops.forEach((loop) => {
              gsap.to(loop, {
                timeScale: boost,
                duration: 0.3,
                overwrite: true,
                onComplete: () => gsap.to(loop, { timeScale: 1, duration: 1.2 }),
              });
            });
          },
        });
        return undefined;
      }

      const W = size.w;
      const H = size.h;
      const perSide = Math.max(...columns.map((c) => c.items.length));
      const span = Math.max(H + cardH * 2, perSide * (cardH + gap));
      const stackX = compact ? W / 2 + cardW * 0.05 : W * 0.355;
      const slope = compact ? 0.14 : 0.7;

      const state = {
        phase: 0,
        speed: 1,
        targetSpeed: 1,
        spread: 0,
        active: false,
        kick: 0,
        targetKick: 0,
      };

      const render = () => {
        const spread = state.spread;
        for (let k = 0; k < cards.length; k += 1) {
          const card = cards[k];
          const side = Number(card.dataset.side);
          const idx = Number(card.dataset.idx);
          const total = Number(card.dataset.total);
          const dir = side < 0 ? -1 : 1;
          let t = (idx / total + state.phase * dir) % 1;
          if (t < 0) t += 1;
          const y = ((t * 2 - 1) * span) / 2;
          const x = side * stackX - y * slope;
          const edge = Math.abs(y) / (H / 2);
          const alpha = Math.max(0, Math.min(1, (1.08 - edge) / 0.3));

          const px = x * spread;
          const py = y * spread;
          const ps = 0.4 + 0.6 * spread;

          card.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(
            1
          )}px, 0) scale(${ps.toFixed(3)})`;
          card.style.opacity = (alpha * Math.min(1, spread * 1.6)).toFixed(3);
          card.style.zIndex = String(Math.round((y / span + 0.5) * 100) + 1);
        }
      };

      const tick = (_time, delta) => {
        if (!state.active) return;
        state.speed += (state.targetSpeed - state.speed) * 0.06;
        state.targetKick *= 0.92;
        state.kick += (state.targetKick - state.kick) * 0.12;
        state.phase +=
          (Math.min(delta, 64) / 1000) * 0.022 * (state.speed + state.kick);
        render();
      };

      render();
      gsap.ticker.add(tick);

      gsap
        .timeline({
          scrollTrigger: { trigger: stage, start: "top 75%", once: true },
        })
        .to(state, {
          spread: 1,
          duration: 1.8,
          ease: "expo.out",
          onUpdate: render,
        })
        .from(
          words,
          {
            autoAlpha: 0,
            y: 18,
            filter: "blur(14px)",
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.25
        )
        .from(
          fades,
          {
            autoAlpha: 0,
            y: 14,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.7
        );

      const visibility = ScrollTrigger.create({
        trigger: stage,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          state.active = self.isActive;
        },
        onUpdate: (self) => {
          const v = self.getVelocity() / 120;
          state.targetKick = Math.max(-14, Math.min(14, v));
        },
      });
      state.active = visibility.isActive;

      const slow = () => {
        state.targetSpeed = 0.18;
      };
      const resume = () => {
        state.targetSpeed = 1;
      };
      stage.addEventListener("mouseenter", slow);
      stage.addEventListener("mouseleave", resume);

      return () => {
        gsap.ticker.remove(tick);
        stage.removeEventListener("mouseenter", slow);
        stage.removeEventListener("mouseleave", resume);
      };
    },
    {
      scope: stageRef,
      dependencies: [size.w, size.h, reduced, compact],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={stageRef}
      aria-labelledby="bfa26-sponsors-title"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#FAFAF9",
        color: INK,
        minHeight: compact ? 0 : "clamp(680px, 100vh, 920px)",
        padding: compact ? "72px 0 80px" : 0,
        display: "grid",
        gridTemplateColumns: "100%",
        placeItems: "center",
        borderTop: "1px solid #E6E6E8",
        borderBottom: "1px solid #E6E6E8",
      }}
    >
      {!reduced &&
        !compact &&
        columns.map(({ side, items }) =>
          items.map((sponsor, idx) => (
            <SponsorCard
              key={`${sponsor.name}-${side}-${idx}`}
              sponsor={sponsor}
              data-stream-card
              data-side={side}
              data-idx={idx}
              data-total={items.length}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: cardW,
                height: cardH,
                marginLeft: -cardW / 2,
                marginTop: -cardH / 2,
                opacity: 0,
                willChange: "transform, opacity",
              }}
            />
          ))
        )}

      {!compact && (
      <>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "0 0 auto 0",
          height: "22%",
          background: "linear-gradient(180deg, #FAFAF9 15%, rgba(250,250,249,0))",
          zIndex: 150,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto 0 0 0",
          height: "22%",
          background: "linear-gradient(0deg, #FAFAF9 15%, rgba(250,250,249,0))",
          zIndex: 150,
          pointerEvents: "none",
        }}
      />
      </>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 200,
          maxWidth: compact ? 380 : 520,
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <p
          data-stream-fade
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: RED,
          }}
        >
          Sponsors &amp; partners
        </p>
        <h2
          id="bfa26-sponsors-title"
          style={{
            margin: "18px 0 0",
            fontFamily: '"Montserrat", system-ui, sans-serif',
            fontWeight: 800,
            fontSize: compact ? "clamp(34px, 9vw, 44px)" : "clamp(44px, 5.4vw, 72px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.98,
            textTransform: "uppercase",
            color: INK,
          }}
        >
          {HEADLINE.map((word, i) => (
            <React.Fragment key={word}>
              <span
                data-stream-word
                style={{
                  display: "inline-block",
                  color: i === HEADLINE.length - 1 ? RED : INK,
                }}
              >
                {word}
              </span>
              {i < HEADLINE.length - 1 && (i === 0 ? " " : <br />)}
            </React.Fragment>
          ))}
        </h2>
        <p
          data-stream-fade
          style={{
            margin: "18px 0 0",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: MUTE,
          }}
        >
          By {sponsors.length} partners · BFA26
        </p>
        <p
          data-stream-fade
          style={{
            margin: "22px auto 0",
            maxWidth: 420,
            fontSize: 15,
            lineHeight: 1.65,
            color: MUTE,
            fontWeight: 500,
          }}
        >
          Organisations committed to innovation, industry growth and
          collaboration — thank you for being part of this year&apos;s
          celebration.
        </p>
        <div data-stream-fade style={{ marginTop: 28 }}>
          <NavLink
            to="/our-sponsors"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 24px",
              background: INK,
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.02em",
              textDecoration: "none",
              borderRadius: 999,
            }}
          >
            View 2026 sponsors
            <ArrowUpRight size={16} />
          </NavLink>
        </div>
      </div>

      {compact && !reduced && (
        <div
          style={{
            position: "relative",
            zIndex: 200,
            width: "100%",
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
            maskImage:
              "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          {columns.map(({ side, items }) => (
            <div key={side} data-strip style={{ overflow: "hidden" }}>
              <div
                data-strip-track
                data-dir={side}
                data-count={items.length}
                style={{ display: "flex", width: "max-content" }}
              >
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy === 1 || undefined}
                    style={{ display: "flex", gap: 12, paddingRight: 12 }}
                  >
                    {items.map((sponsor, idx) => (
                      <SponsorCard
                        key={`${sponsor.name}-${copy}-${idx}`}
                        sponsor={sponsor}
                        playWhenVisible
                        tabIndex={copy === 1 ? -1 : undefined}
                        style={{
                          width: STRIP_CARD_W,
                          height: Math.round((STRIP_CARD_W * 372) / 758),
                          flexShrink: 0,
                          boxShadow: "0 14px 28px -18px rgba(14,14,16,0.5)",
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {reduced && (
        <div
          style={{
            position: "relative",
            zIndex: 200,
            width: "100%",
            maxWidth: 1120,
            padding: "40px 24px 64px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: 12,
          }}
        >
          {sponsors.map((sponsor, i) => (
            <SponsorCard
              key={`${sponsor.name}-${i}`}
              sponsor={sponsor}
              style={{ aspectRatio: "16 / 10" }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
