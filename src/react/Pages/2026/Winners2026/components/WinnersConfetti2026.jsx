import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const PALETTE = ["#c8102e", "#e0354f", "#ffcc4d", "#f5d68a", "#ffffff"];
const BURST_COLORS = ["#c8102e", "#ffcc4d", "#ffffff", "#8a0a1f"];
const RAIN_DURATION = 12000;

const rand = (min, max) => min + Math.random() * (max - min);

const createPiece = (width, height, scatter) => {
  const ribbon = Math.random() < 0.75;
  return {
    x: Math.random() * width,
    y: scatter ? Math.random() * height * 0.6 - height * 0.6 : rand(-height * 0.8, -20),
    w: ribbon ? rand(6, 8) : rand(5, 7),
    h: ribbon ? rand(14, 18) : 0,
    ribbon,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    speed: rand(0.9, 2.6),
    angle: Math.random() * 360,
    spin: rand(-4, 4),
    drift: rand(-0.6, 0.6),
    sway: Math.random() * Math.PI * 2,
    swaySpeed: rand(0.01, 0.03),
    flip: Math.random() * Math.PI,
    flipSpeed: rand(0.02, 0.07),
    opacity: rand(0.75, 1),
  };
};

const WinnersConfetti2026 = ({ burstKey, reduceMotion }) => {
  const canvasRef = useRef(null);
  const rainRef = useRef(null);
  const initialKey = useRef(burstKey);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let raf = 0;
    let rainUntil = performance.now() + RAIN_DURATION;
    const count = window.innerWidth < 768 ? 60 : 110;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pieces = Array.from({ length: count }, () => createPiece(width, height, true));

    const draw = (now) => {
      raf = 0;
      ctx.clearRect(0, 0, width, height);
      const raining = now < rainUntil;
      let alive = 0;

      for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        if (!p) continue;

        p.sway += p.swaySpeed;
        p.y += p.speed;
        p.x += p.drift + Math.sin(p.sway) * 0.6;
        p.angle += p.spin;
        p.flip += p.flipSpeed;

        if (p.y > height + 24) {
          if (raining) {
            pieces[i] = createPiece(width, height, false);
          } else {
            pieces[i] = null;
            continue;
          }
        }
        alive++;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = p.color;
        const flipScale = Math.sin(p.flip);
        if (p.ribbon) {
          const w = p.w * flipScale;
          ctx.fillRect(-w / 2, -p.h / 2, w, p.h);
        } else {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.w / 2, Math.max(0.5, (p.w / 2) * Math.abs(flipScale)), 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (alive > 0) raf = requestAnimationFrame(draw);
    };

    rainRef.current = () => {
      rainUntil = performance.now() + RAIN_DURATION;
      for (let i = 0; i < pieces.length; i++) {
        if (!pieces[i] || pieces[i].y > height * 0.5) pieces[i] = createPiece(width, height, false);
      }
      if (!raf) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      rainRef.current = null;
      window.removeEventListener("resize", resize);
      confetti.reset();
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    const initial = burstKey === initialKey.current;
    if (!initial) rainRef.current?.();

    const fire = (originX, angle) =>
      confetti({
        colors: BURST_COLORS,
        particleCount: initial ? 70 : 35,
        angle,
        spread: 60,
        startVelocity: initial ? 62 : 48,
        ticks: initial ? 260 : 180,
        gravity: 0.9,
        scalar: initial ? 1.1 : 0.9,
        origin: { x: originX, y: 0.75 },
        zIndex: 45,
        disableForReducedMotion: true,
      });

    fire(0, 60);
    fire(1, 120);
  }, [burstKey, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
};

export default WinnersConfetti2026;
