import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SPONSORS_2026 } from "../../Components/SponsorSection2026";
import SponsorStream2026 from "./SponsorStream2026";
import Opening2026 from "./bfa2026/Opening2026";
import AwardWinnersParallax2026 from "./bfa2026/AwardWinnersParallax2026";
import RedCarpet2026 from "./bfa2026/RedCarpet2026";
import Host2026 from "./bfa2026/Host2026";
import Schedule2026 from "./bfa2026/Schedule2026";
import Keynote2026 from "./bfa2026/Keynote2026";
import DiscussionSection2026 from "./bfa2026/DiscussionPanel2026";
import FocusSession2026 from "./bfa2026/FocusSession2026";
import Judges2026 from "./bfa2026/Judges2026";
import Highlights2026 from "./bfa2026/Highlights2026";
import Gallery2026 from "./bfa2026/Gallery2026";
import LookingAhead2026 from "./bfa2026/LookingAhead2026";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BfaLegacy2026 = () => {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 28,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    },
    { scope: pageRef }
  );

  return (
    <div
      ref={pageRef}
      className="min-h-[60vh] overflow-x-clip bg-bfa-paper font-montserrat text-bfa-ink"
    >
      <Helmet>
        <title>Brit FinTech Awards 2026 Legacy | BFA</title>
        <meta
          name="description"
          content="The People. The Progress. The Recognition. Relive Brit FinTech Awards 2026 at Landing FortyTwo — keynote, discussion panel, focus session, winners and partners."
        />
      </Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="cs-height_90 cs-height_lg_80" />

      <Opening2026 />
      <AwardWinnersParallax2026 />
      <SponsorStream2026 sponsors={SPONSORS_2026} />
      <RedCarpet2026 />
      <Host2026 />
      <Schedule2026 />
      <div id="programme" className="scroll-mt-[96px]" />
      <Keynote2026 />
      <DiscussionSection2026 />
      <FocusSession2026 />
      <Judges2026 />
      <Highlights2026 />
      <Gallery2026 />
      <LookingAhead2026 />
    </div>
  );
};

export default BfaLegacy2026;