"use client";

import { NavLink } from "react-router-dom";
import StackSpread from "@/components/ui/stack-spread";
import Gallery2026Mobile from "./Gallery2026Mobile";
import { GALLERY_CARDS_2026 } from "./galleryData";

const TITLE = (
  <>
    Moments
    <span className="text-[#c8102e]"> That </span>
    Matter
  </>
);

const SUBTITLE = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const ACTION = (
  <NavLink to="/photo-gallery-2025" className="btn-pro-1 inline-block">
    View Gallery
  </NavLink>
);

const Gallery2026 = () => {
  return (
    <div id="gallery-2026">
      <div className="hidden md:block">
        <StackSpread
          cards={GALLERY_CARDS_2026}
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
