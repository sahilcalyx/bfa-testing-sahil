"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import StackSpread from "@/components/ui/stack-spread";
import Gallery2026Mobile from "./Gallery2026Mobile";
import { GALLERY_CARDS_2026, buildGalleryCards2026 } from "./galleryData";

const TITLE = (
  <>
    Moments
    <span className="text-[#c8102e]"> That </span>
    Matter
  </>
);

const SUBTITLE = "From the first handshake to the final trophy of BFA 2026.";

const ACTION = (
  <NavLink to="/photo-gallery-2026" className="btn-pro-1 inline-block">
    View Gallery
  </NavLink>
);

const useHexagonCards = () => {
  const [cards, setCards] = useState(GALLERY_CARDS_2026);
  useEffect(() => {
    const update = () =>
      setCards(buildGalleryCards2026(window.innerWidth, window.innerHeight));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cards;
};

const Gallery2026 = () => {
  const cards = useHexagonCards();

  return (
    <div id="gallery-2026">
      <div className="hidden md:block">
        <StackSpread
          cards={cards}
          scrollEffect={false}
          bgColor="#ffffff"
          textColor="#0b0b0c"
          cardRadius={10}
          title={TITLE}
          subtitle={SUBTITLE}
          action={ACTION}
        />
      </div>
      <div className="md:hidden">
        <Gallery2026Mobile
          cards={GALLERY_CARDS_2026}
          title={TITLE}
          subtitle={SUBTITLE}
          action={ACTION}
        />
      </div>
    </div>
  );
};

export default Gallery2026;
