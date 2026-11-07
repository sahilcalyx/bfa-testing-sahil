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

const LINKEDIN_SIZES = {
  sm: { box: "h-[24px] w-[24px] rounded-[5px]", icon: 13 },
  lg: { box: "h-[34px] w-[34px] rounded-[7px]", icon: 18 },
};

/* `nested` renders a span instead of <a> for use inside cards that are already links. */
export function LinkedInLink({ href, name, size = "sm", nested = false, className = "" }) {
  if (!href) return null;
  const { box, icon } = LINKEDIN_SIZES[size];
  const label = `${name} on LinkedIn`;
  const classes = `inline-grid shrink-0 cursor-pointer place-items-center bg-[#0A66C2] align-middle text-[#fff] no-underline transition-colors duration-300 hover:bg-bfa-red hover:text-white ${box} ${className}`;
  const glyph = (
    <svg width={icon} height={icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );

  if (nested) {
    const open = (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(href, "_blank", "noopener,noreferrer");
    };
    return (
      <span
        role="link"
        tabIndex={0}
        aria-label={label}
        title={label}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") open(e);
        }}
        className={classes}
      >
        {glyph}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={classes}>
      {glyph}
    </a>
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
