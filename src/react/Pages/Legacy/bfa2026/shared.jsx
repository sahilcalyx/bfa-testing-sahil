import React from "react";

/* Design tokens — BFA26 editorial
   Paper white · Ink · Signal red · Mute · Line
   Signature: Floor 42 marker (Landing FortyTwo)
   Mirrored as Tailwind colours `bfa-*` in tailwind.config.js; keep in sync. */
export const T = {
  paper: "#FFFFFF",
  ink: "#0E0E10",
  red: "#C8102E",
  mute: "#5A5A60",
  line: "#E6E6E8",
  soft: "#F5F5F4",
};

export const KEYNOTE_VIDEO = "CB6UjQOcQ4g";
export const PANEL_VIDEO = "CL7d_w7iNT4";
export const FOCUS_VIDEO = "oU2rhIwkqFE";
export const HIGHLIGHTS_VIDEO = "b6mHivEGIqI";
export const VOICES_VIDEO = "hP4VXYSHFbw";

export const KEYNOTE_POINTERS = [
  "AI & The Future of Finance",
  "AI Agents in Financial Operations",
  "Governance, Risk & Accountability",
  "Building Smarter Finance Functions",
  "Human Oversight in AI-Driven Decision-Making",
];

export const PANEL_NOTES = {
  "alona-shevtsova":
    "Moderated the conversation on AI adoption, evolving customer expectations and human oversight.",
  "sergio-ivanovic":
    "AI adoption, business transformation and the opportunities AI brings to the money transfer industry.",
  "gayatri-chadaram":
    "AI-powered fraud detection, transaction monitoring, compliance literacy and human judgement.",
  "femi-ekwuyasi":
    "AI-driven operational efficiency, regulatory accountability and the risks of automated decision-making.",
  "jay-anand":
    "Balancing AI capabilities with human expertise, particularly in compliance and customer protection.",
};

export const FOCUS_NOTES = {
  "stefan-binder":
    "Risk appetite, evaluating MSB partnerships, compliance controls and why high-risk corridors need stronger due diligence rather than automatic exclusion.",
  "osman-ibrahim":
    "Serving high-risk corridors, transaction monitoring, customer assessment and enabling safe, compliant access to financial services.",
};

/* Button shape without colours — combine with your own bg/text/border classes. */
export const btnBase =
  "inline-flex items-center gap-[10px] rounded-[4px] px-[22px] py-[14px] font-montserrat text-[14px] font-bold tracking-[0.02em] no-underline cursor-pointer";

export const btnPrimary = `${btnBase} border-[0px] bg-bfa-red text-[#fff] hover:text-white`;

export const btnGhost = `${btnBase} border-[1px] border-solid border-bfa-ink bg-[transparent] text-bfa-ink hover:text-bfa-ink`;

export const btnOnDark = `${btnBase} border-[0px] bg-[#fff] text-bfa-ink hover:text-bfa-ink`;

export function FloorMark({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block select-none font-montserrat font-extrabold leading-[0.85] tracking-[-0.06em] text-bfa-red ${className}`}
    >
      42
    </span>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="m-[0px] font-montserrat text-[12px] font-bold uppercase tracking-[0.18em] text-bfa-red">
      {children}
    </p>
  );
}

export function VideoFrame({ id, title }) {
  return (
    <div className="relative aspect-video w-full [overflow:hidden] rounded-[6px] bg-bfa-ink">
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-[0px]"
      />
    </div>
  );
}
